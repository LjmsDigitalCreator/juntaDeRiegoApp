import { Component } from '@angular/core';
import { Login } from '../../api/login';
import { FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'cLogin',
  templateUrl: 'login.html',
  styleUrls: ['login.css'],
})

export class cLogin {
    flag = true;

    user = new FormControl('');
    password = new FormControl('');

    meter = new FormControl('');
    read = new FormControl('');

    file = new FormControl('');
    documents;
    data;
    
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

    public BringDocument(): void{
      this.login.BringData(this.file.value).subscribe(
        (response) =>{
          console.log(response);
          if((this.file.value != '') &&
          (this.file.value != null) &&
          (this.file.value != undefined)){
            if(response.length != 0){
              this.data = response;
              this.presentToastOk('Datos obtenidos');
            }else{
              this.presentToastError('No se obtuvo la informacio&#769;n');
            }
          }else{
            this.presentToastError('Debes ingresar todos los datos');
          }
        },
        (error) =>{
          console.log(error.status);
          if((this.file.value != '') &&
          (this.file.value != null) &&
          (this.file.value != undefined)){
            this.presentToastOk('Datos procesados y guardados');
          }else{
            this.presentToastError('Debes ingresar todos los datos');
          }
        }
      )
    }

}
