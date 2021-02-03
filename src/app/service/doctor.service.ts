import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiUrl = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

	constructor( private http: HttpClient) { }

	getList():any{

		return this.http.get( apiUrl+'service-cmp-medicos/medico' );
	}
}