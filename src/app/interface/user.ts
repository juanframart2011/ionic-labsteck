import { Country } from "./country";
import { State } from "./state";

export interface User {
    sexo:            string;
    nombre:          string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    address:         Address;
    fechaNacimiento: Date;
    email:           string;
    password:        string;
    enable:          boolean;
    createdBy:       string;
    updatedBy:       string;
}

export interface Address {
    country:        Country;
    region:         State;
    ciudad:         string;
    direccion:      string;
    numeroExterior: string;
    numeroInterior: string;
    colonia:        string;
    telefono:       string;
    ubicacion:      Ubicacion;
    cp:             string;
}

export interface Ubicacion {
    x: number;
    y: number;
}