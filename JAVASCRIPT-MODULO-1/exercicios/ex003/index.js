const velCar1 = prompt("Velocidade do primeiro Carro:Km/H")
const velCar2 = prompt("Velocidade Do segundo Carro:Km/H")

if (velCar1 > velCar2) {
  alert("1º Carro é o mais veloz")
} else if (velCar1 < velCar2) {
  alert("2º Carro é o mais veloz")
} else {
  alert("As velocidades são iguais")
}