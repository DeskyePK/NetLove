function startIntro() {
  const intro = document.getElementById("intro");
  const logo = document.getElementById("logoText");
  const cliqueText = document.getElementById("cliqueText");
  const audio = document.getElementById("introSound");

  // 1. Some com o texto do clique
  cliqueText.classList.add("fade-out-text");

  // 2. Inicia zoom do título
  logo.classList.remove("pulse");
  logo.classList.add("zoom-out");

  // 3. Toca o som
  audio.play().catch(err => {
    console.warn("Erro ao tocar o áudio:", err);
  });

  // 4. Após o zoom, inicia o fade-out total
  setTimeout(() => {
    intro.classList.add("fade-out");
  }, 2000);

  // 5. Exibe o site principal depois do fade completo
  setTimeout(() => {
    intro.style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  }, 4000);
}
