let cantidad;
do {
quantity = parseFloat(prompt("Ingrese la cantidad de las palabras"))
} while (isNaN(cantidad)  ||  cantidad < 1)
let palabras=[];
let t=0

while (t<cantidad) {
    let palabra = prompt("Ingresa la palabra")
    t=t+1
    palabras.push(palabra);

}
let longitud = 0
longitud = palabras.length
let v=0
let conc=""
while (v<longitud){
    conc+=palabras[v] + " "
    v=v+1
}
alert(`La concactenación de palabras es "${conc}"`)