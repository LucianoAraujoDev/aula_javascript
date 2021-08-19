
/*var nome = "Luciano Araujo";
var idade = 40;
var idade2 = 19;
var frase = "Japão é o melhor time do mundo";
var lista = ["maça","laranja","uva"];
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];

//lista.push("banana");
//lista.pop();
//console.log(lista);
//console.log(frutas);
//alert(frutas[1].nome);
//console.log(lista.length);

//alert (nome + " tem " + idade + " anos");
//alert (idade + idade2);
//console.log(nome);
//console.log(idade + idade2); 
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toUpperCase());
var idade = prompt("Qual sua idade?");

if (idade >= 18){
    alert("Maior de idade");
}else {
    alert("Menor de idade");
};
//var count = 0;
/*while (count <= 5){
    console.log(count);
    count = count +1;
};
*/
/*for(count=0; count<=5; count++){
    alert(count);
};
*/
//var d = new Date;
//alert(d.getUTCDate());

//var lista = ["Alemanha", "Inglaterra", "Escócia"];
//lista.push("polonia");
//lista.pop("Inglaterra");

/*var total = 0;

var i = 0;

var valor;

while (i < 6)

{

 valor = 8;

 if (valor > 0)

 {

   total = total + 1;

 }

 i = i + 1;

}

console.log(total + " valores");
*/

/*var N = 8;
var inicio =  1;


while (inicio <= N) {

 if (inicio % 2 == 0) {

   console.log(inicio);

  } 
  inicio++;

}
*/
var valor = 576;
var resto = 0;

nota100 = Math.floor(valor / 100);
resto = valor % 100;
nota50  = Math.floor(resto/50);
resto = resto % 50;
nota20  = Math.floor(resto/20);
resto = resto % 20;
nota10  = Math.floor(resto/10);
resto = resto % 10;
nota5  = Math.floor(resto/5);
resto = resto % 5;
nota2  = Math.floor(resto/2);
resto = resto % 2;
nota1  = Math.floor(resto/1);

console.log(nota100);
console.log(nota50);
console.log(nota20);