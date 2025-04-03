const options = { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3 }
const formatNumber = new Intl.NumberFormat('pt-BR', options)
valoryenes = prompt("digite um valor em yenes")

umyene = 0.0386;
alert(formatNumber.format(valoryenes * umyene))

valordolares = prompt("digite um valor em doláres")

umdolar = 5.7450;
alert(formatNumber.format(valordolares * umdolar))

valoreuros = prompt("digite um valor em euros")

umeuro = 6.2289;
alert(formatNumber.format(valoreuros * umeuro))
