import { Component } from '@angular/core';
import { UserLogin } from '../interface/user-login';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user:UserLogin = {
    email: null,
    password: ""
  };
  constructor(public alert: AlertController) {}

  async _message( text:string ) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',
      message: text,
      buttons: ['OK']
    });

    await alert.present();
  }

  login(){
    console.log( "Logueandose => ", this.user );
    let validateForm = true;
    let message = "";

    if( !this.user.email  ){

      validateForm= false;
      message += "El usuario es obligatorio\n";
    }
    if( !this.user.password  ){

      validateForm= false;
      message += "\nLa contraseña es obligatoria";
    }

    if( !validateForm ){
      this._message( message );
    }
    else{
      this._message( "Felicidades usuario logueado" );
    }
  }
}
