import { Component, OnInit } from '@angular/core';
import { Country } from '../interface/country';
import { State } from '../interface/state';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  countrys:Country[] = [];
  states:State[] = [];

  constructor( private userService:UserService) { }

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
}