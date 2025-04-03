const options = { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3 } //options é um objeto que contém configurações para a formatação de números.
                                                                                                          // style: 'currency'  indica que o número deve ser formatado como uma moeda.
                                                                                                          // currency: 'BRL' define que a moeda a ser utilizada é o Real Brasileiro (BRL).
                                                                                                          // minimumFractionDigits: 2: Define que o número deve ter pelo menos 2 casas decimais.
                                                                                                          // maximumFractionDigits: 3: Define que o número pode ter no máximo 3 casas decimais.

const formatNumber = new Intl.NumberFormat('pt-BR', options) // Intl.NumberFormat é uma classe do JavaScript usada para formatar números de acordo com as configurações regionais.
                                                            // 'pt-BR' especifica que a formatação deve seguir as convenções do português do Brasil.
                                                            // options passa as opções que você definiu anteriormente para personalizar a formatação.
valoryenes = prompt("digite um valor em yenes")

umyene = 0.0386;
alert(formatNumber.format(valoryenes * umyene)) // eu poderia também utilizar const valorFormatado = formatNumber.format(1234.567);
                                                // console.log(valorFormatado);  e a resposta seria R$ 1.234,57

valordolares = prompt("digite um valor em doláres")

umdolar = 5.7450;
alert(formatNumber.format(valordolares * umdolar))

valoreuros = prompt("digite um valor em euros")

umeuro = 6.2289;
alert(formatNumber.format(valoreuros * umeuro))
