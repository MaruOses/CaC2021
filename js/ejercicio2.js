var nombre = prompt("Ingrese su nombre: ")
alert("Ingrese sus notas del 1 al 10")
var nota1 = parseInt(prompt("Ingrese la primer nota: "))

while(nota1 >= 0 && nota1 <=10){
    
}
var nota2 = parseInt(prompt("Ingrese la segunda nota: "))
var nota3 = parseInt(prompt("Ingrese la tercera nota: "))

var promedio = (nota1 + nota2 + nota3)/3

alert(`Hola ${nombre} tu promedio de notas es ${promedio}`)

if(promedio >= 8 && promedio <= 10) {
    document.write(`Excelente ${nombre}`) 
 }else if(promedio >= 4 && promedio <= 7.9 ){
    document.write(`Bien ${nombre} pero puedes mejorar`)
}else{
    document.write(`Muy mal ${nombre}`)
}


