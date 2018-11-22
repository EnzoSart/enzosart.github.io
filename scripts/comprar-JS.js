document.addEventListener("DOMContentLoaded", function(){
    var precio = 8.28;
    var campoCantidad = document.getElementById("quantity");
    var precioSubtotal = document.getElementById("subtotalAmount");
    var CD = document.getElementById("cd");
    var digital = document.getElementById("digit");
    var campoEnvio = document.getElementById("shp-method-sel");
    document.getElementById("address-div").style.display = "none";
    document.getElementById("shp-method-div").style.display = "none";
    var precioActual;
    var precioTotal = document.getElementById("totalAmount");
    var porcentajeEnvio = 1;
    var btnCancelar = document.getElementById("btn-cancelar");

    campoCantidad.addEventListener("change", function(){
        var cantidad = parseInt(campoCantidad.value);
        precioActual = cantidad * precio;
        precioSubtotal.innerHTML = "$" + precioActual.toFixed(2);
        precioActual = precioActual * 1.22;
        precioTotal.innerHTML = "$" + precioActual.toFixed(2);
    });


    CD.addEventListener("change", function(){
        if (CD.checked) {
            document.getElementById("address-div").style.display = "block";
            document.getElementById("shp-method-div").style.display = "block";
            var metodo = campoEnvio.value;
            var costoTotal;
            campoEnvio.value ="default";
            metodo = "default";
            if (metodo=="normal"){
                porcentajeEnvio = 1.005;
                precioTotal.innerHTML = "$" + (precioActual * porcentajeEnvio).toFixed(2);
            }
            else if (metodo=="special"){
                porcentajeEnvio = 1.02;
                precioTotal.innerHTML = "$" + (precioActual * porcentajeEnvio).toFixed(2);
            }
            else if (metodo=="premium"){
                porcentajeEnvio = 1.05;
                precioTotal.innerHTML = "$" + (precioActual * porcentajeEnvio).toFixed(2);
            }
            else {
                precioTotal.innerHTML = "$" + precioActual.toFixed(2);
            }
        

        }
    });

    digital.addEventListener("change", function (){
        if (digital.checked) {
            document.getElementById("address-div").style.display = "none";
            document.getElementById("shp-method-div").style.display = "none";
            precioTotal.innerHTML = "$" + precioActual.toFixed(2);
            porcentajeEnvio = 1;
        }
    })

    campoEnvio.addEventListener("change", function(){
        var metodo = campoEnvio.value;
        var costoTotal;
        if (metodo=="normal"){
            porcentajeEnvio = 1.005;
            precioTotal.innerHTML = "$" + (precioActual * porcentajeEnvio).toFixed(2);
        }
        else if (metodo=="special"){
            porcentajeEnvio = 1.02;
            precioTotal.innerHTML = "$" + (precioActual * porcentajeEnvio).toFixed(2);
        }
        else if (metodo=="premium"){
            porcentajeEnvio = 1.05;
            precioTotal.innerHTML = "$" + (precioActual * porcentajeEnvio).toFixed(2);
        }
        else {
            precioTotal.innerHTML = "$" + precioActual.toFixed(2);
        }
    });

    btnCancelar.addEventListener("click", function(){
        precioSubtotal.innerHTML = "$0";
        precioTotal.innerHTML = "$0";
    })

});