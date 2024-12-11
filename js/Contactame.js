fetch('/json/Info.json')
    .then(response => response.ok ? response.json() : Promise.reject('Error al cargar el archivo JSON'))
    .then(({ Redes }) => {
        const container = document.querySelector('.contactame');
        
        // Generar los botones principales con enlaces
        const areasHTML = `
            <button class="circle button-active">
                <img class="icon" src="/img/svg/person-light.svg" alt="Icono de persona">
            </button>
            ${Object.values(Redes)
                .filter(red => red.State === 'activated')
                .map(red => `
                    <button class="circle item" onclick="window.location.href='${red.Link}';">
                        <img src="${red.Img.light}" alt="${red.Link}">
                    </button>
                `).join('')}
        `;

        container.innerHTML = areasHTML;

        // Manejo del botón de apertura/cierre
        const mainButton = document.querySelector('.button-active');
        const Icon = mainButton.querySelector('img');
        const allButton = document.querySelectorAll('.item');
        let isOpen = false;

        mainButton.addEventListener('click', () => {
            isOpen = !isOpen;
            Icon.src = isOpen ? '/img/svg/close-light.svg' : '/img/svg/person-light.svg';
            allButton.forEach(button => button.classList.toggle('show', isOpen));
        });

        // Generar el HTML para el pie de página con redes sociales
        const redesSolid = document.querySelector('footer .redes');
        redesSolid.innerHTML = Object.values(Redes)
            .filter(red => red.State === 'activated')
            .map(red => `
                <a href="${red.Link}" target="_blank">
                    <img src="${red.Img['solid-light']}" alt="">
                </a>
            `).join('');
    })
    .catch(console.error);
