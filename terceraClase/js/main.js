let textoPrincipal = prompt("Ingrese el texto que desea dar vuelta: ");
let textoReverso = "";
let letra ="";

for (let i = 0; i < textoPrincipal.length; i++) 
{
    letra = textoPrincipal.charAt(i);
    textoReverso = letra + textoReverso;
}

alert("El texto fue dado vuelta y da como resultado:"+ textoReverso+" \nEn el cual el texto era: "+textoPrincipal);
