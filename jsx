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

//A variáveis nesse código não mudam, o usuário tem chances infinitas de tentativas.
