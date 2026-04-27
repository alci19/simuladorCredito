//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos){
    let saldo = ingresos - egresos;
    if (saldo < 0) {
    return 0;
    } 
    else {
    return saldo;
    }
}

function calcularCapacidadPago(montoDisponible){
    return montoDisponible * 0.50;
}