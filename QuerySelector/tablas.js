let planetas = [
    {nombre:"Mercurio", diametro:4879},
    {nombre:"Venus", diametro:12104},
    {nombre:"Tierra", diametro:12756},
    {nombre:"Marte", diametro:6792},
    {nombre:"Júpiter", diametro:142984},
    {nombre:"Saturno", diametro:120536},
    {nombre:"Urano", diametro:51118},
    {nombre:Neptuno, diametro:49528,imagen : "https://meet.google.com/linkredirect?authuser=1&dest=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F63%2FNeptune_-_Voyager_2_%252829347980845%2529_flatten_crop.jpg"}
]
let tabla = document.querySelector('#planetas')

let contenidoTabla = '<tr><th>Nombre</th><th>Diámetro</th></tr>'
for (planeta of planetas){
    contenidoTabla += `<tr><th>${planeta.nombre}</th><th>${plsneta.diametro}</th></tr>`
}
tabla.innerHTML = contenidoTabla