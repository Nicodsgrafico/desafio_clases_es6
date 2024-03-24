import Impuestos from "./Impuestos.js";
import { Cliente } from "./Cliente.js";

// Crear una instancia de Impuestos para un cliente
const impuestosCliente1 = new Impuestos(50000, 10000);

// Crear una instancia de Cliente con los impuestos
const cliente1 = new Cliente("Juan", impuestosCliente1);

console.log(cliente1.calcularImpuesto());
