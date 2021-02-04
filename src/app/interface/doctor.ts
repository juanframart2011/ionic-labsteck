export interface Doctor {
    key:                     string;
    usuario:                 Usuario;
    especialidad:            string;
    numeroCedulaProfesional: string;
    consultorios:            Consultorio[];
    secretarias:             Secretaria[];
    universidad:             null;
    createdAt:               Date;
    updatedAt:               Date;
    createdBy:               string;
    updatedBy:               string;
    hasZoom:                 boolean;
    enable:                  boolean;
}

export interface Consultorio {
    key:        string;
    codigoPlus: string;
    enable:     boolean;
    nombre:     string;
    address:    Address;
}

export interface Address {
    key:            string;
    country:        string;
    region:         string;
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

export interface Secretaria {
    key:       string;
    usuario:   Usuario;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
    enable:    boolean;
}

export interface Usuario {
    key:             string;
    sexo:            string;
    nombre:          string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    photo:           null;
    address:         Address;
    fechaNacimiento: Date;
    email:           string;
    createdAt:       Date;
    updatedAt:       Date;
    createdBy:       string;
    updatedBy:       string;
    curp:            string;
    nss:             string;
}