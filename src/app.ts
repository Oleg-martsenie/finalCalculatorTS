let first = document.getElementById('numero1') as HTMLInputElement; 
let second = document.getElementById('numero2') as HTMLInputElement;
let button = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

function calcular(n1: number, n2: number) {
    return  n1 + n2;
}

button.addEventListener('click', function () {
    resultado.innerHTML = calcular(+first.value, +second.value).toString()
});




/* 
    [Analisando os erros que apareceram]

1º no Calcular,o próprio editor de texto entendeu que tem um outro arquivo aberto e alertou, logo ele entendeu como se a função calcular() estivesse duplicada;

2º no "n1" e "n2" ele coloca três pontos embaixo indicando que pode ocorrer um erro, para resolver isso, apos esse parâmetros, colocamos => n1: number, n2: number
-> Para indicarmos que isso é um número e sempre será.

3º Perceba que agora, ele mostrou o erro, no nosso resultado.innerHTML e no first.value.

-> no nosso first.value ele diz que aquilo é uma string, pois na linha 1 e 2 dissemos que aquilo é um elemento do HTML; todavia ele ta esperando um número. 
(TODO ELEMENTO HTML SEMPRE VAI SER UMA STRING).

=> Para funcionar corretamente, precisamo, converter o first.value para número. Uma das formas é fazendo assim: [+first.value] podemos também usar o [parseInt(first.value) + parseInt(second.value)]

Resolvendo o erro do INNERHTML
    => o resultado.innerHTML está retornando um número, no JS, isso não seria um problema, mas pode ocasionar erros; para corrigirmos isso, a maneira mais correta é, no final da linha do código, adicionarmos o toString(), uma vez que ele está esperando uma string.

    || Finalizando dessa maneira 
     resultado.innerHTML = calcular(+first.value, +second.value).toString()


*/