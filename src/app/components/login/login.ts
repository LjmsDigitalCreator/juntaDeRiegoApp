import { Component } from '@angular/core';
import { Login } from '../../api/login';
import { FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { empty } from 'rxjs';

@Component({
  selector: 'cLogin',
  templateUrl: 'login.html',
  styleUrls: ['login.css'],
})

export class cLogin {
    title = 'Bienvenido';
    subTitle = 'Junta de Riego';

    flag = true;

    user = new FormControl('');
    password = new FormControl('');

    meter = new FormControl('');
    read = new FormControl('');
    
    constructor(public login:Login, public toastController: ToastController) {}

    async presentToastError(message) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000,
        color: "danger"
      });
      toast.present();
    }

    async presentToastOk(message) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000,
        color: "primary"
      });
      toast.present();
    }

    public LoadLogin(): void{
      this.login.logger(this.user.value, this.password.value).subscribe(
        (response) =>{
          let result = response;

          if(result.length == 0){
            this.presentToastError('Usuario o contraseña incorrectos');
          }
          else if(this.user.value == result[0].USER && result[0].PASSWORD2 == result[0].PASSWORD && (result[0].ROL == 'annotator' || result[0].ROL == 'root')){
            this.presentToastOk('Ingreso Correcto');
            this.flag = false;
          }else{
            this.presentToastError('Usuario o contraseña incorrectos');
          }
        },
        (error) =>{
          console.log(error);
        }
      )
    }

    public NewAmount(): void{
      this.login.NewMeter(this.meter.value, this.read.value).subscribe(
        (response) =>{
          console.log(response);
          if((this.meter.value != '' && this.read.value != '') &&
          (this.meter.value != null && this.read.value != null) &&
          (this.meter.value != undefined && this.read.value != undefined)){
            this.presentToastOk('Datos procesados y guardados');
          }else{
            this.presentToastError('Debes ingresar todos los datos');
          }
        },
        (error) =>{
          console.log(error.status);
          if((this.meter.value != '' && this.read.value != '') &&
          (this.meter.value != null && this.read.value != null) &&
          (this.meter.value != undefined && this.read.value != undefined)){
            this.presentToastOk('Datos procesados y guardados');
          }else{
            this.presentToastError('Debes ingresar todos los datos');
          }
        }
      )
    }
}
