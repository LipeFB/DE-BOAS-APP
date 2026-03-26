let paginaAtual = 1;

const botao = document.getElementById("botao");
const titulo = document.getElementById("txtbemvindo");
const imagem = document.getElementById("imagemtutorial");

botao.addEventListener('click', function() {
  if (paginaAtual === 1) {
    titulo.textContent = "É divertido e ajudamos você a ficar motivado com recompensas pelo seu empenho em ficar 'De Boas' ";
    imagem.classList.remove('animacao');
    imagem.src = "img/tut2.png";
    paginaAtual = 2;

}   else if (paginaAtual === 2) {
    titulo.textContent = "Você pode acompanhar sua evolução em ficar 'De boas' com as nossas estatísticas inteligentes.";
    imagem.src = "img/tut3.png"
    paginaAtual = 3;

}   else if (paginaAtual === 3) {
    window.location.href = "objetivos.html"
  }
})