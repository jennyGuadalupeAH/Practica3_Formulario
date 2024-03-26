const FRM_CALENDARIO = document.querySelector("#frmCalendario");
FRM_CALENDARIO.addEventListener("submit", calcularCalendario);

function calcularCalendario(event) {
    event.preventDefault();

    let dia = parseFloat(document.querySelector("#txtdia").value);
    let mes = parseFloat(document.querySelector("#txtmes").value);
    let año = parseFloat(document.querySelector("#txtaño").value);

    if (isNaN(dia) || dia <= 0 || dia > 31 || isNaN(mes) || mes <= 0 || mes > 12 || isNaN(año) || año <= 0) {
        alert("Ingrese una fecha válida.");
    } else {
        
        let imprimir = document.getElementById("Resultado");
        imprimir.textContent = calcularDatos(dia, mes, año);
    }

    function calcularDatos(dia, mes, año) {
    let bandera = false;

        switch (mes) {


            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if (dia <= 30) {
                    dia++;
                } else if (dia == 31 && mes == 12) {
                    dia = 1;
                    mes = 1;
                    año++;
                } else if (dia == 31 && mes != 12) {
                    dia = 1;
                    mes++;
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (dia <= 29) {
                    dia++;
                } else if (dia == 30) {
                    dia = 1;
                    mes++;
                }else{
                    bandera=true;
                }
                break;
            case 2:
                if (año % 4 === 0 ) {

                    if (dia <= 28) {
                        dia++;
                    } else if (dia == 29) {
                        dia = 1;
                        mes++;
                    } else {
                        bandera = true;
                        
                    }
                } else {
                    if (dia <= 27) {
                        dia++;
                    } else if (dia == 28) {
                        dia = 1;
                        mes++;
                    } else {
                        bandera = true;
                        
                    }
                }
                break;
        }
        //validado la bandera para retornar resultados
        if(bandera){
            return "Fecha Incorrecta"
        }else{

        return "" + dia + "/" + mes + "/" + año;
        }
    }
}
