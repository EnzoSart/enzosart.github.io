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
    precioSubtotal.innerHTML = precio;


    campoCantidad.addEventListener("change", function(){
        var cantidad = parseInt(campoCantidad.value);
        precioActual = cantidad * precio;
        precioSubtotal.innerHTML = "$" + precioActual.toFixed(2);
    });

    CD.addEventListener("change", function(){
        if (CD.checked) {
            document.getElementById("address-div").style.display = "block";
            document.getElementById("shp-method-div").style.display = "block";
            var metodo = campoEnvio.value;
            var costoTotal;
            if (metodo=="normal"){
                costoTotal = precioActual * 1.005;
                precioSubtotal.innerHTML = "$" + costoTotal.toFixed(2);
            }
            else if (metodo=="special"){
                costoTotal = precioActual * 1.02;
                precioSubtotal.innerHTML = "$" + costoTotal.toFixed(2);
            }
            else if (metodo=="premium"){
                costoTotal = precioActual * 1.05;
                precioSubtotal.innerHTML = "$" + costoTotal.toFixed(2);
            }
            else {
                precioSubtotal.innerHTML = "$" + precioActual.toFixed(2);
            }
        

        }
    });

    digital.addEventListener("change", function (){
        if (digital.checked) {
            document.getElementById("address-div").style.display = "none";
            document.getElementById("shp-method-div").style.display = "none";
            precioSubtotal.innerHTML = "$" + precioActual.toFixed(2);
        }
    })

    campoEnvio.addEventListener("change", function(){
        var metodo = campoEnvio.value;
        var costoTotal;
        if (metodo=="normal"){
            costoTotal = precioActual * 1.005;
            precioSubtotal.innerHTML = "$" + costoTotal.toFixed(2);
        }
        else if (metodo=="special"){
            costoTotal = precioActual * 1.02;
            precioSubtotal.innerHTML = "$" + costoTotal.toFixed(2);
        }
        else if (metodo=="premium"){
            costoTotal = precioActual * 1.05;
            precioSubtotal.innerHTML = "$" + costoTotal.toFixed(2);
        }
        else {
            precioSubtotal.innerHTML = "$" + precioActual.toFixed(2);
        }
    })





});