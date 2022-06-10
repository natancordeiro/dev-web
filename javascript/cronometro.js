const data = new Date()

// Adicionar | Remover dias
/*
console.log(data.toString())
data.setDate(data.getDate() - 1)
console.log(data.toString())
*/

// Adicionar | Remover meses
/*
console.log(data.toString())
data.setMonth(data.getMonth() + 1)
console.log(data.toString())
*/

//Adicionar | Remover anos
/*console.log(data.toString())
data.setFullYear(data.getFullYear() - 1)
console.log(data.toString())
*/

// 15/01/2017
const data1 = new Date(2017, 0, 15)

// 23/02/2017
const data2 = new Date(2017, 1, 23)

/*
console.log(data1.toString())
console.log(data2.toString())
*/

//converter datas para algo que possamos calcular

/*
console.log(data1.getTime())
console.log(data2.getTime())
*/

// 1 Janeiro de 1970

//encontrar a quantidade de milissegundos entre data1 e data2

//console.log(Math.abs(data1.getTime() - data2.getTime()))

/* 
  1 dia = 24 horas
  1 hora = 60 minutos
  1 minuto = 60 segundos 
  1 segundo = 1000 milissengundos

  Então quantos milissegundos existem em um dia? 
*/


const milissegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime())
const milissegundosPorDia = (1*24*60*60*1000)
//console.log('1 dia tem: ' + (1*24*60*60*1000) + ' milissegundos')

console.log('A diferença entre a data1 e a data2 é de ' + Math.ceil(milissegundosEntreDatas / milissegundosPorDia) + ' dias')

