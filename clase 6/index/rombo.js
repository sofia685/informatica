let cantidad;
do {
    cantidad = parseFloat(prompt("Ingrese la cantidad"));
} while (isNaN(cantidad) || cantidad < 1);



        let nLinea = 0;
        while (nLinea < cantidad) {
        let linea = "";
        let nColumna = 0;
        while(nColumna<nLinea){
            nColumna=nColumna+1;
            linea = linea + "    ";

        }
        nColumna = 0;
        while (nColumna < cantidad) {
            
            nColumna=nColumna+1;
            linea = linea + "*";
        }  
        console.log(linea);
        nLinea = nLinea + 1;
    }
    //expandir la consola 