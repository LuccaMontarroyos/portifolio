function visitGitHub() {
    window.open('https://github.com/LuccaMontarroyos', '_blank');
}


function downloadCV() {
    const link = document.createElement('a');
    link.href = 'src/assets/curriculo.pdf'; 
    link.download = 'Lucca_Barros_Curriculo.pdf';
    link.click();
}


function sendEmail() {
    const email = document.getElementById('email-input').value;
    window.location.href = `mailto:luccabarros2003@gmail.com?subject=Contato via Portfólio&body=${email}`;
}

function openIpAddressTracker() {
    window.open('https://github.com/LuccaMontarroyos/IP-Address-Tracker', '_blank');
}

function openPokemonApp() {
    window.open('https://github.com/LuccaMontarroyos/pokedex-app-quest-react-avancado', '_blank');
}

function openAdviceGenerator() {
    window.open('https://github.com/LuccaMontarroyos/Advice-generator', '_blank');
}

const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};
