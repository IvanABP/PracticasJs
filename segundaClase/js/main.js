let calculadora = Number.parseInt( prompt("Digite 1-Suma 2-resta 3-multiplicacion 4-Division "));
let primerNumero = Number.parseFloat(prompt("Digite el primer valor: "));
let segundoNumero = Number.parseFloat(prompt("Digite el segundo valor: ")) ;
let resultado = 0;

if(calculadora == 1){
    resultado = primerNumero + segundoNumero;
    alert("El resultado es: "+ resultado);
}
else if (calculadora == 2){
    resultado = primerNumero - segundoNumero;
    alert("El resultado es: "+ resultado);
}
else if (calculadora == 3){
    resultado = primerNumero * segundoNumero;
    alert("El resultado es: "+ resultado);
}
else {
    resultado = primerNumero / segundoNumero;
    alert("El resultado es: "+ resultado);
}