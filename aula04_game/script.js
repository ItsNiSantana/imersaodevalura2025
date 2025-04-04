//Criar uma lista com 3 jogadores
personagem = ["", "", ""]; //lista vazia

viloes = ["", "", ""];

forcaPersonagem = 0;
forcaViloes = 0;

alert("O array Personagem contém: " + personagem);
//preenchimento da lista do jogador
for (let i = 0; i < 3; i++) {
  //notes aula: a variável de const recebe um valor mas esse valor não é modificável, já let é
  escolhaPersonagem = prompt(
    "Digite o nome do seu personagem da Marvel" + (i + 1)
  );
  personagem[i] = escolhaPersonagem;
  //Calcular a força de cada jogador, e depois somar para saber a força do time
  forcaPersonagem = Math.floor(Math.random() * 10) + 1
  forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1
  //forcaPersonagem += Math.floor(Math.random() * 10) + 1 //Maneira mais avançada de fazer a mesma coisa
}
console.log("Agora, o Array Personagem contém: " + personagem); //review lista preenchida

console.log("Viloes:" + viloes);
//preenchimento da lista do computador
for (let i = 0; i < 3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 10); //computador sorteia vilões da lista vilões possíveis para jogar contra o jogador
  viloesPossiveis = [
    "Thanos",
    "Loki",
    "Duente verde",
    "Dr. Octupus",
    "Venom",
    "Ultron",
    "Rei do Crime",
    "Doutor Destino",
    "Caveira Vermelha",
    "Obadiah Stane"
  ];
  viloes[i] = viloesPossiveis[indiceAleatorio];
  //Calcular a força de cada jogador do time do computador
  forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1
}
console.log("Viloes escolhidos:" + viloes); //review lista preenchida

//Comparar os dois times para saber quem venceu.
if(forcaPersonagem > forcaViloes){
  alert("Seu time é muito forte! Você ganhou a disputa de cabo de guerra! Sua força foi " + forcaPersonagem)
}
else{
  if(forcaPersonagem < forcaViloes){
    alert("Seu time é fraquinho. O computador ganhou o cabo de guerra com força de " + forcaViloes)
  }
  else{
    alert("Os dois times tem a mesma força! Vocês empataram!")
  }
}
