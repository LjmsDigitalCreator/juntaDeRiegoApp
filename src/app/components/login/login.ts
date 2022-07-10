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

    file = new FormControl('');
    documents;
    data;
    
    constructor(public login:Login, public toastController: ToastController) {
      this.login.BringAllData().subscribe(
        (response) =>{
          console.log(response)
          this.documents = response;
          console.log(this.documents);
        },
        (error) =>{
          console.log(error);
        }
      )
    }

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
