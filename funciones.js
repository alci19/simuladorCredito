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


function calcularInteresSimple(monto, tasa, plazoAnios){
    return plazoAnios * monto * (tasa / 100);
}

function calcularTotalaPagar(monto, tasa, plazoAnios){
    let interes = calcularInteresSimple(monto, tasa, plazoAnios);
    return interes + monto + 100;
}

function calcularCuotaMensual(monto, tasa, plazoAnios){
    let total = calcularTotalaPagar(monto, tasa, plazoAnios);
    return total / (plazoAnios * 12);
}

function analizarCredito(montoDisponible, monto, tasa, plazoAnios){
    let capacidad = calcularCapacidadPago(montoDisponible);
    let cuota = calcularCuotaMensual(monto, tasa, plazoAnios);
    return capacidad > cuota;
}