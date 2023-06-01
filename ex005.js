<html>
 <head>
     <style>
         body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            color: #023047
        }
        .page {
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
        }
        .btnChooseColor {
            background-color: #f72585;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            border: none !important;
            transition: all linear 160ms;
            cursor: pointer;
            margin: 0 !important;
        }
        img {
            max-width: 15%;
            max-height: 15%;
        }

     </style>
 
 </head>
 <body>
    <button><strong>Cor</strong></button>
    <h1 id="Titulo">Login</h1>
    <div class="page">
        <form method="POST" class="formLogin">
            <h1><strong>Login</strong></h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
            <label for="email">E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" autofocus="true" />
            <label for="password">Senha</label>
            <input type="password" placeholder="Digite sua senha" />
            <a href="/">Esqueci minha senha</a>
            <input type="submit" value="Acessar" class="btn" />
        </form>

        
    </div>
    
    <img  src="https://www.pngmart.com/files/21/Among-Us-Transparent-Images-PNG.png" >
    
    
 </body>
</html>

<script> 
var btn = document.querySelector('button');
function random(numero) {
 return Math.floor(Math.random()*(numero+1));
}
btn.addEventListener("click", chooseColor);
 function chooseColor() {
 var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' +
random(255) + ')';
 document.body.style.backgroundColor = rndCol;
}


</script>

