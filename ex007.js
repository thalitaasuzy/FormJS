<!DOCTYPE html>
<html lang="pt-BR"></html>

<html>
    <head>

    </head>
    <body>
        var elemento = document.getElementById('teste');
        elemento.addEventListener("click", alerta);
        function alerta() {
         alert ("Alô, mundo!");
        }
        
        elemento.addEventListener("click", function () { alert('fiz algo #1')});
        elemento.addEventListener("click", function () { alert('fiz algo #2')} );
        //Comparar com:
        element.onclick = function () { alert('fiz algo #1'); };
        element.onclick = function () { alert('fiz algo #2'); };
        
        elemento.removeEventListener(“click”, funcao1)
    </body>
</html>



