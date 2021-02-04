import { Component, OnInit } from '@angular/core';
import { Country } from '../interface/country';
import { State } from '../interface/state';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  countryCurrent:number;
  regionCurrent:number;

  user:User = {};
  
  countrys:Country[] = [];
  states:State[] = [];

  constructor( private userService:UserService, public alert: AlertController ) {}

  async _message( title:string, text:string ) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: title,
      message: text,
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {

    this.getCountrys();
    this.getStates();
  }

  getCountrys(){

    this.userService.getCountry().subscribe(countrys => {
            this.countrys = countrys;
        });
  }

  getStates(){

    this.userService.getState( "MX" ).subscribe(states => {
            this.states = states;
        });
  }

  register(){

    this.user.enable = false;
    this.user.createdBy = "manuel.perez@labsteck.com";
    this.user.updatedBy = "manuel.perez@labsteck.com";

    let ubicacion = {
      x: 46.5,
      y: 46.5
    }

    let address = {
      country: this.countrys[this.countryCurrent],
      region:         this.states[this.regionCurrent],
      ciudad:         "asdfasdf",
      direccion:      "asdfa adfas",
      numeroExterior: "8",
      numeroInterior: "S/N",
      colonia:        "asdfaf",
      telefono:       "qwerqwe",
      ubicacion:      ubicacion,
      cp:             "2242"
    }

    this.user.address = address;

    this.userService.save( this.user ).subscribe(
      res => {
        if( res ){
          this._message( "Felicidades", "se creo el registor con éxito");
        }
      },
      err => {
        console.log('HTTP Error Lang', err)
        let msg = "";

        for (let index = 0; index < err.error.error.length; index++) {
          msg += err.error.error[index] + "<br>";
        }

        this._message( err.error.message, msg);
    },
      () => console.log('HTTP request completed.')
    );
  }
}