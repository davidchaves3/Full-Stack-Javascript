primeiroNome = prompt('Seu primeiro Nome:')
sobrenome = prompt('Seu sobrenome:')
campo = prompt('Qual campo de estudo:')
ano = parseFloat(prompt('Qual ano atual?'))
nascimento = parseFloat(prompt('Qual o ano de Nascimento'))
idade = ano - nascimento

document.write('Nome completo:',primeiroNome, sobrenome, ' Campo de estudos: ', campo, 'Idade ', idade, ' anos')
