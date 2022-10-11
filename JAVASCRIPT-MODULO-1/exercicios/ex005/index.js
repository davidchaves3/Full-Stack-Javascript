let medida = parseFloat(prompt("Informe a medida em Metros:"))
let opcao = prompt("Escolha para qual unidade de medida você quer converter \n" + "- Milimetro(mm)\n" + "- Centímetro(cm)\n" + "- decímetro(dm)\n" + "- decâmetro(dam)\n" + "- Hectômetro(hm)\n" + "- Quilômetro(km)")

switch(opcao){
  case "mm":
    alert(medida * 1000)
    break
  case "cm":
    alert(medida * 100)
    break
  case "dm":
    alert(medida * 10)
    break
  case "dam":
    alert(medida/10)
    break
  case "hm":
    alert(medida/100)
    break
  case "km":
    alert(medida/1000)
    break
  default:
    alert("Opação Inválida")
}