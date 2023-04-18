function embaralharPalavra(msg) {
  const palavraOrdem = msg.split("");
  const letrasEmbaralhadas = [];

  for (let i = 0; palavraOrdem.length; i++) {
    const random = Math.floor(Math.random() * palavraOrdem.length);
    const letras = palavraOrdem.splice(random, 1)[0];
    letrasEmbaralhadas.push(letras);
  }
  return letrasEmbaralhadas.join("");
}

console.log(embaralharPalavra("JavaScript"));
