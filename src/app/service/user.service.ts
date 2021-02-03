import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiUrl = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

	constructor( private http: HttpClient) { }

	getCountry():any{

		return this.http.get( apiUrl+'country/list' );
	}

	getState( country:string ):any{

		return this.http.get( apiUrl+'region/list?country_name=' + country );
	}
}