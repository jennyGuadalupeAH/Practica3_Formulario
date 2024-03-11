
/* RECIBIR EL ID DEL FORMULARIO PARA PODERLO MANIPULAR */
    const FRM_HOTEL =  document.querySelector("#frmHotel");
/* GENERAR EL EVENTO DEL FROMULARIO POR MEDIO DEL BOTON SUBMIT */ 
FRM_HOTEL.addEventListener("submit",calcularHospedaje);

function calcularHospedaje(event){
    /*evita que la pagin se actualize */
    event.preventDefault();
    /*RECIBIR LOS DATOS DE LAS CAJAS DE TEXTO */

    let noDiasHosp = document.querySelector("#txtDiasHospedados").value;
    let precioDia = document.querySelector("#txtPrecioDia").value;
    let tipoPago = document.querySelector("#selectTipoPago").value;

/*IMPRIMIR EN EL FORMULARIO */
let imprimirRes = document.getElementById("Resultado");
imprimirRes.textContent = hotelTDA(noDiasHosp,precioDia,tipoPago);
                          

}

//Datos los recibo como parametros

function hotelTDA(noDiasHosp,precioDia,tipoPago){
    //operaciones 
    //calcular total de hospedaje 

    let subTotal = noDiasHosp * precioDia;
    let descuento = 0;

    if(noDiasHosp>5 && noDiasHosp<=10){
        descuento=subTotal*0.1;
    
    }else if(noDiasHosp >10 && noDiasHosp <= 15){
        descuento= subTotal*0.15;

    }else if(noDiasHosp>15){
        descuento = subTotal * 0.2;

    }
    let totalpagar = subTotal - descuento;

   /* switch(tipoPago){
        case  "efectivo":
            totalpagar = totalpagar * 1.03;
            break;
            case "tarjeta":

                break;

    }
    */
   if(tipoPago == "tarjeta"){
    totalpagar = totalpagar * 1.03;

   }else if(tipoPago == "efectivo"){

   }
   return "SubTotal: $" + subTotal + 
   "::Descuento" +  descuento +
   "::Total a Pagar: $" + totalpagar +
   "::Tipo de Pago: $" + tipoPago;
}