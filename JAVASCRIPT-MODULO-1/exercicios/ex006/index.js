let cont = 0
let visitadas = " "
const nomeDoTurista = prompt("Qual o seu nome?")
let resposta = prompt("Já visitou alguma cidade?(Sim/Não)")

while(resposta === "Sim") {
  const cidade = prompt("Qual o nome da cidade?")
  visitadas += " - " +  cidade + "\n"
  cont++
  resposta = prompt("Já visitou mais alguma cidade?(Sim/Não)")
}

alert(
  "O " + nomeDoTurista + " visitou " + cont + " cidades \n" 
  + " São elas " + visitadas
)