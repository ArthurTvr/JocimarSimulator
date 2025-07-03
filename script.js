const audios = {
  frase1: "audio/frase1.mp3",
  frase2: "audio/frase2.mp3",
  frase3: "audio/frase3.mp3",
  frase4: "audio/frase4.mp3"
};

const audioPlayer = document.getElementById("audioPlayer");

document.getElementById("fraseSelect").addEventListener("change", function () {
  const valorSelecionado = this.value;

  if (audios[valorSelecionado]) {
    audioPlayer.src = audios[valorSelecionado];
    audioPlayer.load();
    audioPlayer.play();
  } else {
    audioPlayer.pause();
    audioPlayer.src = "";
  }

  // Oculta o texto de resposta
  document.getElementById("resposta").textContent = "";
});
