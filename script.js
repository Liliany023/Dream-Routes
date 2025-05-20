document.addEventListener('DOMContentLoaded', function() {
  // Todos os botões levam para o formulário
  const buttons = [
    document.getElementById('contateBtn'),
    ...document.querySelectorAll('.saberMais'),
    ...document.querySelectorAll('.reservar')
  ];
  
  buttons.forEach(button => {
    if (button) {
      button.addEventListener('click', function() {
        window.location.href = 'formulário.html';
      });
    }
  });
  
  // Animação para os cards de destino
  const destinoCards = document.querySelectorAll('.destino-card');
  
  destinoCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.querySelector('.destino-overlay').style.transform = 'translateY(0)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.querySelector('.destino-overlay').style.transform = 'translateY(100%)';
    });
  });
});