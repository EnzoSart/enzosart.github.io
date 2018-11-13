document.addEventListener("DOMContentLoaded", function(){
    var precio = 8.28;
    var campoCantidad = document.getElementById("quantity");
    var precioTotal = document.getElementById("totalAmount");
    var CD = document.getElementById("cd");
    var digital = document.getElementById("digit");
    var campoEnvio = document.getElementById("shp-method-sel");
    var precioActual;

    campoCantidad.addEventListener("change", function(){
        var cantidad = parseInt(campoCantidad.value);
        precioActual = cantidad * precio;
        precioTotal.innerHTML = "$" + precioActual;
    });

    CD.addEventListener("change", function(){
        if (CD.checked) {
            document.getElementById("address-div").style.display = "block";
            document.getElementById("shp-method-div").style.display = "block";
        }
    });

    digital.addEventListener("change", function (){
        if (digital.checked) {
            document.getElementById("address-div").style.display = "none";
            document.getElementById("shp-method-div").style.display = "none";
        }
    })

    campoEnvio.addEventListener("change", function(){
        var metodo = campoEnvio.value;
        var costoTotal;
        if (metodo=="normal"){
            costoTotal = precioActual * 1.005;
            precioTotal.innerHTML = "$" + costoTotal;
        }
        else if (metodo=="special"){
            costoTotal = precioActual * 1.02;
            precioTotal.innerHTML = "$" + costoTotal;
        }
        else if (metodo=="premium"){
            costoTotal = precioActual * 1.05;
            precioTotal.innerHTML = "$" + costoTotal;
        }
        else {
            precioTotal.innerHTML = "$" + precioActual;
        }
    })



});