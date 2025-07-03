const respostas = {
  frase1: "'Que ódio do Ricardo'",
  frase2: "'Valeu, um abraço, tchau tchau'",
  frase3: "'A culpa é do Ricardo. Pq ela é minha e eu coloco em quem eu quiser'",
  frase4: "'Vou ligar pro Gentil'"
};

document.getElementById("fraseSelect").addEventListener("change", function () {
  const valorSelecionado = this.value;
  const resposta = respostas[valorSelecionado] || "";
  document.getElementById("resposta").textContent = resposta;
});
