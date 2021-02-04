import { Component, OnInit } from '@angular/core';
import { Country } from '../interface/country';
import { State } from '../interface/state';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';

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

  constructor( private userService:UserService ) {}

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
    console.log( this.countryCurrent );
    console.log( this.regionCurrent );

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

    /*country?:        Country;
    region?:         State;
    ciudad?:         string;
    direccion?:      string;
    numeroExterior?: string;
    numeroInterior?: string;
    colonia?:        string;
    telefono?:       string;
    ubicacion?:      Ubicacion;
    cp?:             string;

    this.user.address.country = this.countrys[this.countryCurrent];
    this.user.address.region = this.states[this.regionCurrent];*/
    /*
    this.user.address.ubicacion.x = 46.5;
    this.user.address.ubicacion.y = 46.5;
    this.user.address.cp = "2242";*/

    this.user.address = address;

    console.log( "user register() => ", this.user );
  }
}