rodada = 1;
while (rodada <= 3) {
  console.log("Rodada:" + rodada);

  escolhaJogador = prompt("Nivel " + rodada + ", escolha o vidro (1, 2 ou 3)? Se quiser desistir digite 0.");
  pisoQuebrado = Math.floor(Math.random() * 3) + 1;
  
  if(escolhaJogador == 0){
    alert("Obrigado(a) por participar.")
    rodada = 1000;
  }
  if (escolhaJogador > 0 && escolhaJogador <= 3) {
    if (escolhaJogador == pisoQuebrado) {
      //escolheu o vidro que estava quebrado
      alert("O vidro quebrou! Acabou o jogo para você.");
      rodada = 1000;
    } 
    else {
      alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado);
    }

    rodada = rodada + 1;
  } 
  else {
    alert("Você digitou um piso inexistente")
  }
}

if (rodada == 4) {
  alert("Você venceu! Parabéns!");
}
