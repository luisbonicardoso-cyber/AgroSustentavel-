// Seleção dos elementos do menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Função para alternar o menu (abrir/fechar)
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Ouvinte de clique no botão hambúrguer
hamburger.addEventListener('click', toggleMenu);

// Fecha o menu automaticamente ao clicar em qualquer link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
