export interface Doctor {
    content:          Content[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface Content {
    key:                     string;
    usuario:                 Usuario;
    especialidad:            string;
    numeroCedulaProfesional: string;
    consultorios:            Consultorio[];
    secretarias:             Secretaria[];
    universidad:             null;
    createdAt:               Date;
    updatedAt:               Date;
    createdBy:               AtedBy;
    updatedBy:               AtedBy;
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
    country:        Country;
    region:         string;
    ciudad:         string;
    direccion:      string;
    numeroExterior: null | string;
    numeroInterior: string;
    colonia:        string;
    telefono:       string;
    ubicacion:      Ubicacion | null;
    cp:             string;
}

export enum Country {
    MX = "MX",
}

export interface Ubicacion {
    x: number;
    y: number;
}

export enum AtedBy {
    Jh6879530GmailCOM = "jh6879530@gmail.com",
    ManuelPerezLabsteckCOM = "manuel.perez@labsteck.com",
}

export interface Secretaria {
    key:       string;
    usuario:   Usuario;
    createdAt: Date;
    updatedAt: Date;
    createdBy: AtedBy;
    updatedBy: AtedBy;
    enable:    boolean;
}

export interface Usuario {
    key:             string;
    sexo:            Sexo;
    nombre:          string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    photo:           null;
    address:         Address;
    fechaNacimiento: Date;
    email:           string;
    createdAt:       Date;
    updatedAt:       Date;
    createdBy:       AtedBy | null;
    updatedBy:       AtedBy | null;
    curp:            string;
    nss:             null | string;
}

export enum Sexo {
    F = "F",
    M = "M",
}

export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    sorted:   boolean;
    unsorted: boolean;
    empty:    boolean;
}