function distribuiCaracter() {
  //Selecionar o valor digitado
  const caracter = document.getElementById('entrada').value

  //Limpar o campo de digitação 
  document.getElementById('entrada').value = ''

  //Limpar espaços em branco nas extremidades da string
  caracter.trim()

  switch(caracter) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      //Adicionar o caracter no campo referente a números
      document.getElementById('apenas-numeros').value = caracter
      break;
    default:
      //Adicionar o caracter no campo referente a letras
      document.getElementById('apenas-letras').value = caracter

  }
}
