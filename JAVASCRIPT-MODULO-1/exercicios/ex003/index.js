const veiculo1 = prompt("Informe o nome do primeiro veículo:")
const velCar1 = prompt("Velocidade do primeiro Carro:Km/H")

const veiculo2 = prompt("Informe o nome do segundo veículo:")
const velCar2 = prompt("Velocidade Do segundo Carro:Km/H")

if (velCar1 > velCar2) {
  alert(veiculo1 + " 1º Carro é o mais veloz")
} else if (velCar1 < velCar2) {
  alert(veiculo2 + " 2º Carro é o mais veloz")
} else {
  alert(veiculo1 + " e " +  veiculo2  + " As velocidades são iguais")
}