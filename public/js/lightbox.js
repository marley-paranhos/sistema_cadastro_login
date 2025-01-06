// Abre o modal e exibe a imagem clicada
function openModal(img) {
    const modal = document.getElementById('lightboxModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex'; // Torna o modal visível
    modalImage.src = img.src; // Define a imagem ampliada
  }
  
  // Fecha o modal
  function closeModal() {
    const modal = document.getElementById('lightboxModal');
    modal.style.display = 'none'; // Oculta o modal
  }
  