export class Cliente {
    constructor(nombre, impuestos) {
        this._nombre = nombre;
        this._impuestos = impuestos;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }
    get impuestos() {
        return this._impuestos;
    }
    set impuestos(nuevo_impuesto) {
        this._impuestos = nuevo_impuesto;
    }
    calcularImpuesto() {
        const impuesto = this._impuestos 
        const impuestototal = (impuesto.montoBrutoAnual - impuesto.deducciones) * 0.21;
        return impuestototal;
    }
}
