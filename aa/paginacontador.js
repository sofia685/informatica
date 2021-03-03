let count = localStorage.getItem("count")

if (count == null){
    count = localStorage.setItem("count", JSON.stringify(1))
    count = JSON.parse(localStorage.getItem("count"))
    console.log(count)
}
else{
    count= JSON.parse(localStorage.getItem("contar"))
    localStorage.setItem("count",JSON.stringify(count + 1))
    count = localStorage.getItem("contar")
}
document.write(`el usuario ha ingresado ${contar} veces`)
