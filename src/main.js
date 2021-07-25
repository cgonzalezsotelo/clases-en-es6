// import {Cliente} from "./cliente.js";
// import {Impuesto} from "./impuestos.js";

class Cliente {
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

    calcularImpuesto() {
        const impuestoCalc = montoBrutoAnual1._montoBrutoAnual - montoBrutoAnual1._deducciones;
        const impuestoResult = (impuestoCalc * 21) / 100;
        return Math.floor(impuestoResult);
    };
};

class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    get  deducciones() {
        return this._deducciones;
    }

    set montoBrutoAnual(nuevoMontoBrutoAnual) {
        this._montoBrutoAnual = nuevoMontoBrutoAnual;
    }

    set deducciones(nuevadeducciones) {
        this._deducciones = nuevadeducciones;
    }
};


const montoBrutoAnual1 = new Impuesto(500, 100);

const cliente1 = new Cliente("Cristian", Impuesto);
console.log(`El nombre del cliente es: ${cliente1._nombre} y el impuesto a pagar es: ${cliente1.calcularImpuesto()}`);


