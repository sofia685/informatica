let cantidad;
do {
    cantidad = parseFloat(prompt("Ingrese el cantidad"));
} while (isNaN(cantidad) || cantidad < 1);



let nLinea = 0;
while (nLinea < cantidad) {
  let linea = "";
  let nColumna = 0;
  while (nColumna < cantidad) {
    linea = linea + "*";
    nColumna = nColumna + 1;
    }
       
console.log(linea);
  nLinea = nLinea + 1;
}
// quitar "group similar" en la consola