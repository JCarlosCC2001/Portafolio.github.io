const buttonMenu = document.querySelector('.menu-button');
const menu = document.querySelector('.dropdown-menu');

// Toggle de la clase 'active' para mostrar/ocultar el menú
buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const navMenu = document.querySelector('.dropdown-menu > nav');

// Definición del contenido del menú
navMenu.innerHTML = `
    <button class="button button-1" onclick="scrollToSection('SobreMi')">
        <img src="img/svg/about-light.svg" alt="Icono Sobre Mi"> Sobre Mi
    </button>
    <hr>
    <button class="button button-1" onclick="scrollToSection('Especializacion')">
        <img src="img/svg/services-light.svg" alt="Icono Especialización"> Especialización
    </button>
    <hr>
    <button class="button button-1" onclick="scrollToSection('Experiencia')">
        <img src="img/svg/work-light.svg" alt="Icono Experiencia"> Experiencia
    </button>
    <hr>
    <button class="button button-1" onclick="scrollToSection('Proyectos')">
        <img src="img/svg/project-light.svg" alt="Icono Proyectos"> Proyectos
    </button>
    <hr>
    <button class="button button-1" onclick="scrollToSection('habilidades')">
        <img src="img/svg/habilidades-light.svg" alt="Icono Habilidades"> Habilidades
    </button>
`;

// Función para desplazarse suavemente a la sección seleccionada
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`No se encontró el elemento con el ID: ${id}`);
    }
}
