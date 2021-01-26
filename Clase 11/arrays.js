let numeroNotas;
    do {
        numeroNotas = parseFloat(prompt("Ingrese la cantidad de notas a promediar"))
    } while (isNaN(numeroNotas) ||  numeroNotas < 1);
    let  arraynotas=[];
    let i=0;
while(i<numeroNotas){
    let notas = parseFloat(prompt("Ingrese las notas"))
    if (notas <=10 && notas >=0 ) {
        i=i+1;
        arraynotas.push(notas); 
    }
}
let lorgido=0;
longitud = arraynotas.length;
let j=0;
let suma=0;
while(j<longitud){
   suma=suma+arraynotas[j];
   j=j+1;
}
let promedio=0;
promedio= suma/longitud;
console.log(`Su promedio es ${promedio}`);