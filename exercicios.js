// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  const soma = num1 + num2
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Olá, seja bem vindo!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("")
  const largura = prompt("")

  const resultado = altura * largura

  console.log(resultado)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const ano1 = prompt("")
  const ano2 = prompt("")
  const idade = ano1 - ano2

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)


}
calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("")
  const idade = prompt("")
  const email = prompt("")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("")
  const cor2 = prompt("")
  const cor3 = prompt("")

  const minhasCores = [cor1, cor2, cor3]

  console.log(minhasCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}
retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}
calculaIngressosEspetaculo()
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1 > string2

}
checaStringsMesmoTamanho("", "")
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  let primeiroObjeto = array.shift()
  let segundoObjeto = array.pop()
  array.push(primeiroObjeto)
  array.unshift(segundoObjeto)

  return array

}
trocaPrimeiroEUltimo("panela", "bola", "chinelo")
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() == string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt("")
  const nascimento = prompt("")
  const emissao = prompt("")

  const idade = anoAtual - nascimento
  const vencimento = anoAtual - emissao

  const renovacao = idade <= 20 && vencimento >= 5 || idade >= 20 && idade <= 50 && vencimento >= 10 || idade >= 50 && vencimento >= 15

  console.log(renovacao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const anoBisexto = ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)
  return anoBisexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("")
  const escolaridade = prompt("")
  const disponibilidade = prompt("")

  const resposta = idade === "sim" && escolaridade === "sim" && disponibilidade === "sim"

  console.log(resposta)

}