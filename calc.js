//Uma validação rápida com um cálculo simples


//Duas variáveis  gerando números aleatórios entre 1 e 9
var n1 = parseInt(Math.random()*9+1)
var n2 = parseInt(Math.random()*9+1)


//soma das duas variáveis
let key = n1+n2


//laço de repetiçao com a entrada do usuário, irá se repetir até o valor digitado está correto
do
vkey = prompt(`Reslova o teste: ${n1} + ${n2}`)
while(vkey!=key)

alert(`Correto`)



//As variáveis nesse código não mudam, o usuário tem chances infinitas de tentativas.
//_____________________________________________________________________________________





//Nesse segundo código as variáveis são alteradas a cada tentativa
//a função 'validate' é repetida a cada valor digitado incorretamente.


function validate() {
var n1 = parseInt(Math.random()*9+1)
var n2 = parseInt(Math.random()*9+1)
let key = n1+n2

vkey = prompt(`Resolva o cálculo: ${n1} + ${n2}`)
if(vkey==key){
    
}else{
    alert('Erro, Tente novamente!')
    validate()
}
}

//Eu chamei a função 'validate' através do 'onload' na tag 'body'.
//exemplo:

<html>
<head>
<tittle>Cálculo simples de validação</tittle>
<script src="system.js"></script>
</head>
   <body onload="validate()">
   
   </body>
</html>





