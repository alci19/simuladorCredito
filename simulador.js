//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    let cmpingresos = document.getElementById("txtIngresos");
    let ingresossrc = cmpingresos.value;
    let ingresosFloat = parseFloat (ingresossrc);

    let cmpegresos = document.getElementById("txtEgresos");
    let egresossrc = cmpegresos.value;
    let egresosFloat = parseFloat (egresossrc);
    
    let saldofinal = calcularDisponible(ingresosFloat , egresosFloat);

    let disponiblespn = document.getElementById("spnDisponible")
    disponiblespn.textContent = saldofinal;

    let capacidadpago = calcularCapacidadPago(saldofinal);

    let spncapacidad = document.getElementById("spnCapacidadPago")
    spncapacidad.textContent = capacidadpago;
}   