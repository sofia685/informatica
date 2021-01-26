function factorialBucles(n){
    let resultado = 1
    let factor = 2
    while (factor <= n){
        resultado= resultado * factor
        factor = factor + 1
    }
    return resultado
}

function factorialRecursivo(n){
     if (n <= 1) 
     return 1
    else{
        console.log(`calculando ${n} * factorial(${n - 1})`)
        return n * factorialBucles(n - 1)
    }
}