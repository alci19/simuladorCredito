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

    
    let cmpmonto = document.getElementById("txtMonto");
    let montosrc = cmpmonto.value;
    let monto = parseInt(montosrc);

    let cmpplazo = document.getElementById("txtPlazo");
    let plazosrc = cmpplazo.value;
    let plazo = parseInt(plazosrc);

    let cmptasa = document.getElementById("txtTasaInteres");
    let tasasrc = cmptasa.value;
    let tasa = parseInt(tasasrc);

    let interes = calcularInteresSimple(monto , tasa , plazo);
    let spninteres = document.getElementById("spnInteresPagar");
    spninteres.textContent = interes;

    let total = calcularTotalaPagar(monto , tasa , plazo);
    let spntotal = document.getElementById("spnTotalPrestamo");
    spntotal.textContent = total;

    let cuota =  calcularCuotaMensual(monto, tasa, plazo);

    let cuotasrc = document.getElementById("spnCuotaMensual");
    cuotasrc.textContent = cuota;

    let analizar = analizarCredito(saldofinal, monto, tasa, plazo)
    let status= document.getElementById("spnEstadoCredito");
    if (analizar){
    status.textContent = "APROBADO ✅";
    status.className = "aprobado";
    } 
    else {
    status.textContent = "RECHAZADO ❌";
    status.className = "rechazado";
    }

}   