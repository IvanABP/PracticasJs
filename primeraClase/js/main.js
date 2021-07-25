/*  var= Variables global
    let= Variable bloque
    const = Variable que no modifica

    prompt = Toma dato por teclado
    alert = Muestra una alerta 
*/

var sueldo = Number.parseInt(prompt ("Digite el valor del sueldo: "));
var horasExtras = Number.parseInt(prompt ("Digite la cantidad de horas echas: "));
var valor = Number.parseInt(prompt ("Digite el valor de las horas extras: "));

var resultadoExtras = horasExtras * valor;
var resultadoSueldo = resultadoExtras + sueldo;

alert(resultadoSueldo);

