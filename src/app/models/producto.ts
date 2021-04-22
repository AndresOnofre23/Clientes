export class Producto {
    _id?: number;
    name: string;
    apellido: string;
    correo: string;
    numero: string;

    constructor(name: string, apellido: string, correo: string, numero: string ){
        this.name = name;
        this.apellido = apellido;
        this.correo = correo;
        this.numero = numero;
    }
}
