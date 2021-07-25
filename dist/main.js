"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import Cliente from "./cliente";
// import Impuesto from "./impuestos";
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this.nombre;
    },
    set: function set(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  }]);

  return Cliente;
}();

;

var Impuesto = /*#__PURE__*/function () {
  function Impuesto(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuesto);

    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  _createClass(Impuesto, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._montoBrutoAnual;
    },
    set: function set(nuevoMontoBrutoAnual) {
      this._montoBrutoAnual = nuevoMontoBrutoAnual;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(nuevadeducciones) {
      this._deducciones = nuevadeducciones;
    }
  }]);

  return Impuesto;
}();

;

function calcularImpuesto() {
  var impuestoCalc = montoBrutoAnual1._montoBrutoAnual - montoBrutoAnual1._deducciones;
  var impuestoResult = impuestoCalc * 21 / 100;
  return Math.floor(impuestoResult);
}

;
var montoBrutoAnual1 = new Impuesto(300, 100);
var cliente1 = new Cliente("Cristian", calcularImpuesto());
console.log("El nombre del cliente es: ".concat(cliente1._nombre, " y el impuesto a pagar es: ").concat(cliente1._impuesto));