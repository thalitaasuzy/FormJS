<html>
 <head>
 <meta charset="utf-8">
 <title>Meu Diário Web</title>
 </head>
 <style>
     #centralizado {color: rgb(56, 208, 255); background-color: rgb(253, 158, 69);}
     #yellowTxt{color:rgb(253, 250, 69)}
     button {size: 800cm; color: black; background-color: rgb(186, 163, 223);}
     body {background-color: rgb(165, 130, 223) ;}
 </style>
 
 <body>
 <h1 id="centralizado">Minha página Web</h1>

 <p id="yellowTxt" class=”centralizado”>Olá! Meu Nome é Thalita Suzy</p>  

 <p>Moro no <a href="https://pt.wikipedia.org/wiki/Brasil">Brasil</a>. Especificamente em <a href="https://pt.wikipedia.org/wiki/Fortaleza"> Fortaleza-CE </a> </p>

 <img  height="620cm" left="200cm"  src="https://i.pinimg.com/236x/e0/60/e1/e060e1de42d2f313a1f3fbb1685fd7ea.jpg" >

 <a href="https://br.pinterest.com/pin/779826491748755184" > <button>Acessar</button> </a>

 <a href="https://br.pinterest.com/pin/779826491748755184" > <img src = "https://i.pinimg.com/564x/25/71/4f/25714f68d5430dd06531ea271388118c.jpg" alt= PortugalLadrona height="460cm" width="272cm"></a>

 <button id = OiBotão onclick= "window.alert('olá')"> Oi</button> 

 <a> <button id= mudarCor >
     Mudar de cor</button> </a>

<script> 
var btn = document.querySelector('#mudarCor');
function random(numero) {
 return Math.floor(Math.random()*(numero+1));
}
btn.onclick = function() {
 var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' +
random(255) + ')';
 document.body.#centralizado.style.backgroundColor = rndCol;
}
            
        
        
</script>

 </body>
</html>
