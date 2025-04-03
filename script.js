idade = prompt("Quantos anos você tem?");
if (idade >= 18) {
  //condicionamento
  alert("você pode jogar jokenpo");
  escolhaJogador = prompt("1 - Pedra \n2 - Papel \n3 - Tesoura");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  // Jogador Pedra, Computador Pedra ===> Empate
  // Jogador Tesoura, Computador Tesoura ===> Empate
  // Jogador Papel, Computador Papel ===> Empate

  alert(
    "1 - Pedra; \n2 - Papel \n3 - Tesoura \n A escolha do computador é: " +
      escolhaComputador
  );
  if (escolhaJogador == escolhaComputador) {
    alert("Empate!");
  }
  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      // Jogador Pedra, Computador Papel ===> Computador vence
      alert("Computador venceu");
    }
    if (escolhaComputador == 3) {
      // Jogador Pedra, Computador Tesoura ===> Jogador vence
      alert("Jogador venceu");
    }
  }

  if (escolhaJogador == 2) {
    if (escolhaComputador == 1) {
      // Jogador Papel, Computador Pedra ===> Jogador vence
      alert("Jogador venceu");
    }
    if (escolhaComputador == 3) {
      // Jogador Papel, Computador Tesoura ===> Computador vence
      alert("Computador venceu");
    }
  }

  if (escolhaJogador == 3) {
    if (escolhaComputador == 1) {
      // Jogador Tesoura, Computador Pedra ===> Computador vence
      alert("Computador venceu");
    }
    if (escolhaComputador == 2) {
      // Jogador Tesoura, Computador Papel ===> Jogador vence
      alert("Jogador venceu");
    }
  }
} 
else {
  alert("você não pode jogar");
}
