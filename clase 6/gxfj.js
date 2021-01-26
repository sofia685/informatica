let numero;
do {
    numero = parseFloat(prompt("ingrese un numero"));
} while (isNaN(numero) || numero < 0 );
console.log(`la raíz cuadrada es: ${Math.sqrt(numero)}`);
