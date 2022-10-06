const primeiroNome = prompt("Informe o primeiro nome do recruta:")
const sobrenome = prompt("Informe o sobrenome do escruta:")
const campoDeEstudo = prompt("Qual é o campo de estudo do Recruta?")
const anoDeNascimento = parseFloat(prompt("Qual o ano de nascimento do Recruta"))

alert(
  "Recruta cadastrado com sucesso!\n" +
  "\nNome Completo: " + primeiroNome + " " + sobrenome +
  "\nCampo de estudo: " + campoDeEstudo + 
  "\nIdade: " + (2022-anoDeNascimento)
)