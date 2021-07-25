export class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre() {
        return this.nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
};
