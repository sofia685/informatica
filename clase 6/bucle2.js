let nLinea = 0;
while (nLinea <= alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna <= ancho) {
    if (nLinea== 0 nLinea== alto ) {
      linea = linea + "";
    } else if (nColumna == 0  nColumna==ancho) {
      linea = linea + "";
    } else {
        linea=linea + " "
    }
    nColumna = nColumna + 1;
  }
  console.log(linea);
  nLinea = nLinea + 1;
}