// Interatividade na barra de navegação //

// Espera o DOM ser carregado para garantir que os elementos estejam disponíveis
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o ícone do menu hamburguer
  const hamburger = document.querySelector('.hamburger');
  // Seleciona o menu de navegação
  const navMenu = document.querySelector('.nav-menu');

  // Adiciona um ouvinte de evento para o clique no ícone do menu hamburguer
  hamburger.addEventListener('click', function () {
      // Alterna a classe 'show' no menu de navegação, mostrando ou escondendo-o
      navMenu.classList.toggle('show');
  });
});

// Interatividade no carrossel //

// Variável para controlar o índice do slide atual
let indiceSlide = 0;
// Função para exibir os slides do carrossel
function exibirSlides() {
  // Seleciona todos os elementos com a classe 'carousel-slide'
  let slides = document.getElementsByClassName("carousel-slide");
  // Oculta todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Incrementa o índice do slide
  indiceSlide++;
  // Volta ao primeiro slide se atingir o final
  if (indiceSlide > slides.length) {
    indiceSlide = 1;
  }
  // Exibe o slide atual
  slides[indiceSlide-1].style.display = "block";
  // Define um tempo de espera para exibir o próximo slide
  setTimeout(exibirSlides, 2000); 
}

// Chama a função para iniciar o carrossel
exibirSlides();

// Botão voltar ao topo //
  
  // Define uma função chamada scrollFunction que é chamada sempre que ocorre um evento de rolagem
  window.onscroll = function() {
    scrollFunction();
  };
  
  // Função para mostrar ou ocultar o botão de voltar ao topo, dependendo da posição de rolagem
  function scrollFunction() {
    // Verifica se a posição de rolagem vertical do corpo do documento é maior que 20 pixels
    // ou se a posição de rolagem vertical do elemento raiz (html) é maior que 20 pixels
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // Se a posição de rolagem for maior que 20 pixels, o botão de voltar ao topo é exibido
      document.getElementById("btnTopo").style.display = "block";
    } else {
      // Caso contrário, o botão de voltar ao topo é ocultado
      document.getElementById("btnTopo").style.display = "none";
    }
  }
  
  // Função para rolar a página de volta ao topo quando o botão de voltar ao topo é clicado
  function scrollToTop() {
    // Define a posição de rolagem vertical do corpo do documento como 0, levando a página de volta ao topo
    document.body.scrollTop = 0;
    // Define a posição de rolagem vertical do elemento raiz (html) como 0, levando a página de volta ao topo
    document.documentElement.scrollTop = 0;
  }