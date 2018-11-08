document.addEventListener("DOMContentLoaded", function(){
    var precio = 8.28;
    var campoCantidad = document.getElementById("quantity");
    var precioTotal = document.getElementById("totalAmount");
    var CD = document.getElementById("cd");
    var digital = document.getElementById("digital");
    var shpmethod = document.getElementById("shp-method-sel");

    campoCantidad.addEventListener("change", function(){
        var cantidad = parseInt(campoCantidad.value);
        precioTotal.innerHTML = "$" + cantidad * precio;
    });

    CD.addEventListener("change", function(){
        if (CD.checked) {
            document.getElementById("address-div").style.display = "block";
            document.getElementById("shp-method-div").style.display = "block";
        }
    });

    digital.addEventListener("change", function(){
        if (digital.checked) {
            document.getElementById("address-div").style.display = "none";
            document.getElementById("shp-method-div").style.display = "none";
        }
    });

    shpmethod.addEventListener("change", function(){
       if (document.getElementById("shp-method-nor").selected) {
           precioTotal.innerHTML = "$" + precio * 1.5 * cantidad;
       }
    });





});