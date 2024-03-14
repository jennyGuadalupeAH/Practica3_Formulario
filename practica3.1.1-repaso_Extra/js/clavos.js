const frmclavos = document.querySelector("#frmclavos");
frmclavos.addEventListener("submit", calcularClavos);

function calcularClavos(event) {
    event.preventDefault();

    let tipoclavo = document.querySelector("#tipoClavos").value;
    let cantidadClavos = parseInt(document.querySelector("#txtClavos").value);

    if (!tipoclavo || tipoclavo == "no") {
        alert("Porfavor, seleccione un origen válido")
    } else if (isNaN(cantidadClavos) || cantidadClavos <= 0) {
        alert("El campo, esta vacio o un variable invalida ingrese bien los datos")

    } else {
        let imprimir = document.getElementById("Resultado");
        imprimir.textContent = calcularDatos(tipoclavo, cantidadClavos);
    }



    function calcularDatos(tipoclavo, cantidadClavos) {


        let costototal = 0;

        switch (tipoclavo) {
            case "Acero inoxidable":
                if (cantidadClavos <= 100) {
                    costototal = cantidadClavos * 1.50;
                } else if (cantidadClavos > 100 && cantidadClavos <= 250) {
                    clavos = cantidadClavos - 100;
                    costototal = (100 * 1.50) + (clavos * 1.20);
                } else if (cantidadClavos > 250) {
                    clavos = cantidadClavos - 250;
                    costototal = (100 * 1.50) + (150 * 1.20) + (clavos * 0.80);
                }
                break;
            case "Acero bicromania":
                if (cantidadClavos <= 100) {
                    costototal = cantidadClavos * 2.00;
                } else if (cantidadClavos > 100 && cantidadClavos <= 250) {
                    clavos = cantidadClavos - 100;
                    costototal = (100 * 2.00) + (clavos * 1.50);
                } else if (cantidadClavos > 250) {
                    clavos = cantidadClavos - 250;
                    costototal = (100 * 2.00) + (150 * 1.50) + (clavos * 1.00);
                }
                break;
            case "Laton":
                if (cantidadClavos <= 100) {
                    costototal = cantidadClavos * 3.00;
                } else if (cantidadClavos > 100 && cantidadClavos <= 250) {
                    clavos = cantidadClavos - 100;
                    costototal = (100 * 3.00) + (clavos * 2.50);
                } else if (cantidadClavos > 250) {
                    clavos = cantidadClavos - 250;
                    costototal = (100 * 3.00) + (150 * 2.50) + (clavos * 2.00);
                }
                break;
        }


        return "Tipo de Clavo: " + tipoclavo +
            " Cantidad de Clavo: " + cantidadClavos +
            " Costo total: " + costototal;
    }
}
