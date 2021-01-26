let altura;
let masa;
do{
    altura = parseFloat(prompt("ingrese su altura"));
    masa = parseFloat(prompt("ingrese su masa"));
} while (isNaN(altura) || altura < 0  || isNaN(masa) || masa < 0);
console.log(`su IMC es igual a: ${masa/Math.pow(altura)}`);
let IMC = masa/Math.pow(altura);
  do{
      console.log("your IMC is underweight");
  } while (IMC < 18,5);
  do{
    console.log("your IMC is normal");
   
  } while (IMC > 18,5 || IMC < 24,9 );
  do{
    console.log("your IMC is overweight");
  } while ( IMC > 24,9 || IMC < 29,9);
  
 do{ 
     console.log("your IMC is obese");
    
  } while (IMC > 30);