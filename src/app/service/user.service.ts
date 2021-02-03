import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../interface/user';

const apiUrl = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

	constructor( private http: HttpClient) { }

	getCountry():any{

		return this.http.get( apiUrl+'service-cmp-access/country/list' );
	}

	getState( country:string ):any{

		return this.http.get( apiUrl+'service-cmp-access/region/list?country_name=' + country );
	}

	save( user:User ){
		
		return this.http.post( apiUrl+'service-cmp-access/signin', user );
	}
}