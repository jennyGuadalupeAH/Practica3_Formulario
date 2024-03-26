const FRM_CALENDARIO = document.querySelector("#frmCalendario");
FRM_CALENDARIO.addEventListener("submit", calcularCalendario);

function calcularCalendario(event) {
    event.preventDefault();

    let dia = parseFloat(document.querySelector("#txtdia").value);
    let mes = parseFloat(document.querySelector("#txtmes").value);
    let año = parseFloat(document.querySelector("#txtaño").value);

    if (isNaN(dia) || dia <= 0 || dia > 31) {
        alert("El campo de día está vacío o contiene un valor inválido. Ingrese un día válido.");
    } else if (isNaN(mes) || mes <= 0 || mes > 12) {
        alert("El campo de mes está vacío o contiene un valor inválido. Ingrese un mes válido.");
    } else if (isNaN(año) || año <= 0) {
        alert("El campo de año está vacío o contiene un valor inválido. Ingrese un año válido.");
    } else {
        let imprimir = document.getElementById("Resultado");
        imprimir.textContent = calcularDatos(dia, mes, año);
    }

    function calcularDatos(dia, mes, año) {
        let sumMes = mes;
        let sumDia = dia;
        let sumAño = año;

        if (mes === 12 && dia === 31) {
            sumDia = 1;
            sumMes = 1;
            sumAño = año + 1;



        } else if (mes === 2) {

            const esBisiesto = (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0));

            if (dia === 29 && esBisiesto) {
                sumDia = dia - 28;
                sumMes = 3;

            } else if (dia === 28 && !esBisiesto) {
                sumDia = dia - 27;
                sumMes = 3;


            } else {
                sumDia = dia + 1;
            }


        } else if (dia === 31) {
            if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10) {
                sumDia = 1;
                sumMes = mes + 1;
            }
        } else if (dia === 30) {
            if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
                sumDia = 1;
                sumMes = mes + 1;
            }
        } else if(dia>1 && dia<29) {
            sumDia = dia + 1;
        }else{
        
        alert("incorrecto");
        
        
        }

        return "" + sumDia + "/" + sumMes + "/" + sumAño;
    }
}
