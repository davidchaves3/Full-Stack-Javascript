const nome1 = prompt("Nome do Personagem de ataque:")
const poderAtaque = prompt("Poder de Ataque do Personagem:")
const nome2 = prompt("Nome do Personagem de Defesa:")
const pontosVida = prompt("Qtd de Pontos de vida do Personagem:")
const poderDefesa = prompt("Poder de Defesa:")
const escudo = prompt("Tem escudo?")
const dano = 0

if (poderAtaque > poderDefesa && escudo === "N") {

  dano = poderAtaque - poderDefesa
  pontosVida = pontosVida - dano

} else if ( poderAtaque > poderDefesa && escudo == "S") {

  dano = (poderAtaque - poderDefesa)/2
  pontosVida = pontosVida - dano 

} else {

  dano = 0 

}

alert("Personagem um - Poder de Ataque: " + (poderAtaque - poderDefesa))
alert("Dano causado - " + dano)
alert("Personagem dois - Poder de Defesa: " + (poderDefesa - poderDefesa))
alert("Pontos de Vida - " + pontosVida)