"use strict";

var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));
var _Cliente = require("./Cliente.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Crear una instancia de Impuestos para un cliente
var impuestosCliente1 = new _Impuestos["default"](50000, 10000);

// Crear una instancia de Cliente con los impuestos
var cliente1 = new _Cliente.Cliente("Juan", impuestosCliente1);
console.log(cliente1.calcularImpuesto());