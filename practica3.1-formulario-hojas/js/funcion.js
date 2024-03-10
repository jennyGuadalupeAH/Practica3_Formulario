/* RECIBIR EL ID DEL FORMULARIO PARA PODERLO MANIPULAR */
    const FRM_HOJA = document.querySelector("#frmHojas");
/* GENERAR EL EVENTO DEL FROMULARIO POR MEDIO DEL BOTON SUBMIT */ 
FRM_HOJA.addEventListener("submit",calcularHoja);

function calcularHoja(event){
event.preventDefault();
/*RECIBIR LOS DATOS DE LAS CAJAS DE TEXTO */
let tipohoja = document.querySelector("#cmbtipoHoja").value;
let metodoPago = document.querySelector("#cmbtipoPago").value;
let txtCantidad  = document.querySelector("#txtCantidad").value;
let txtPrecio = document.querySelector("#txtPrecio").value;



let costoTotal = txtCantidad * txtPrecio;

   

        if (tipohoja == "hielo") {
            costoTotal = costoTotal - (costoTotal * 0.20);

        } else if (tipohoja == "vigueta") {
            costoTotal = costoTotal - (costoTotal * 0.15);
        } else if (tipohoja == "armazones") {

        } else {
            console. log("TIPO DE DATO NO ES CORRECTA");
            
        }
    
        if (metodoPago === "credito") {
            costoTotal = costoTotal - (costoTotal * 0.07);
        } else if (metodoPago == "contado") {

        } else {
            console. log("MÉTODO DE PAGO NO VÁLIDO. LAS OPCIONES SON: contado o credito");
            

        }

    


let imprimirRes = document.getElementById("Resultado");
imprimirRes.textContent = 
                          "::Total a Pagar: $" + costoTotal +
                          "::Tipo de Pago: " + metodoPago;
    
   
}