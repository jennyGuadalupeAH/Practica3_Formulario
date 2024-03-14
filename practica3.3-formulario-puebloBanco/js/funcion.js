document.addEventListener('DOMContentLoaded', function () {
    const frmCosto = document.getElementById('frmCosto');

    frmCosto.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario
        calcularCosto();
    });
});

function calcularCosto() {
    
    let cantidad = parseFloat(document.getElementById('txtCantidad').value);
    let valor = document.querySelector('.titulo').getAttribute('value');

  
    let resultado = validarDatos(cantidad, valor);

    
    let imprimirRes = document.getElementById("Resultado");
    imprimirRes.textContent = resultado;
}

function validarDatos(cantidad, valor) {
    if (!valor || valor === "tarjeta") {
        return "POR FAVOR INGRESE UNA TARJETA VALIDA";
    }
9

    // Calcular el resultado
    var resultado = calcularResultado(cantidad, valor);

    return "El resultado es: " + resultado + "::Tipo de tarjeta: " + valor;
}

function calcularResultado(cantidad, valor) {
    var resultado = 0;

    switch (valor) {
        case "tarjetatipo1":
            resultado = cantidad * 0.25;
            break;
        case "tarjetatipo2":
            resultado = cantidad * 0.35;
            break;
        case "tarjetatipo3":
            resultado = cantidad * 0.40;
            break;
        case "otroTipo":
            resultado = cantidad * 0.50;
            break;
    }

    resultado = cantidad + resultado; // Sumar la cantidad original al resultado

    return resultado;
}
