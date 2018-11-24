document.addEventListener("DOMContentLoaded", function (){
    
    
    var button = document.getElementById("comprar");

    button.addEventListener("click", function(){
    
        var wrapper = document.getElementById("loader-wrapper");

        wrapper.style.display = "block";


        setTimeout (function (){
        
            var alert = document.getElementById ("alert-buy");

        
            wrapper.style.display = "none";

        
            alert.setAttribute("class", "success-alert animated fadeInUp");
        }, 4000);
    })
});