<h1>Calculator TS</h1>

<p>This is my first time using TS to do a project, and this is really simple, I took some notes, in portuguese, I'll put them here</p>

<h2>Notes in Portugese:</h2>

<hr/>

<h1> [Analisando os erros que apareceram]</h1>
    
<hr>

1º no Calcular,o próprio editor de texto entendeu que tem um outro arquivo aberto e alertou, logo ele entendeu como se a função calcular() estivesse duplicada;
<hr>
2º no "n1" e "n2" ele coloca três pontos embaixo indicando que pode ocorrer um erro, para resolver isso, apos esse parâmetros, colocamos => n1: number, n2: number
-> Para indicarmos que isso é um número e sempre será.
<hr>
3º Perceba que agora, ele mostrou o erro, no nosso resultado.innerHTML e no first.value.
<hr>
-> no nosso first.value ele diz que aquilo é uma string, pois na linha 1 e 2 dissemos que aquilo é um elemento do HTML; todavia ele ta esperando um número. 
(TODO ELEMENTO HTML SEMPRE VAI SER UMA STRING).
<hr>
=> Para funcionar corretamente, precisamo, converter o first.value para número. Uma das formas é fazendo assim: [+first.value] podemos também usar o <strong>[parseInt(first.value) + parseInt(second.value)]</strong>

Resolvendo o erro do INNERHTML
=> o resultado.innerHTML está retornando um número, no JS, isso não seria um problema, mas pode ocasionar erros; para corrigirmos isso, a maneira mais correta é, no final da linha do código, adicionarmos o toString(), uma vez que ele está esperando uma string.

<h2>Finalizando dessa maneira</h2 
```resultado.innerHTML = calcular(+first.value, +second.value).toString ()```
<hr>


<h1>The resul gonna appear here</h1>

<img src="calculatorts.gif">