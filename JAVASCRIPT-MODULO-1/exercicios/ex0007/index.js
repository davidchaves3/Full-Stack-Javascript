let opcao = "5"

do {
    opcao = prompt(
      "Seja Bem-Vindo(a)\n" + 
      "\nEscolha uma das opções abaixo:" +
      "\n1.Opção Um" +
      "\n2.Opção Um" +
      "\n3.Opção Um" +
      "\n4.Opção Um" +
      "\n5.Encerrar" 
    )

    switch (opcao) {
      case "1":
        alert("Você escolheu a opção 1")
        break
      case "2":
        alert("Você escolheu a opção 2")
        break
      case "3":
        alert("Você escolheu a opção 3")
        break
      case "4":
        alert("Você escolheu a opção 4")
        break
      case "5":
        alert("Você escolheu a opção 5")
        break
      default:
        alert("Opção inválida")       
    }

} while (opcao !== "5")