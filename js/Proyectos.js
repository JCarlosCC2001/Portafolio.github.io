fetch('/json/Proyectos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('albun-proyectos');

        let areasHTML = '';

        data.forEach(proyect => {
            areasHTML += `
                <div class="item">
                    <img src="${proyect.Img[0]}">
                    <div class="overlay">
                        <h4>${proyect.Nombre}</h4>
                        <span>${proyect.Pertenecia}</span>
                        <span>${proyect.Habilidades}</span>
                        <a href="${proyect.Link}">Ver</a>
                    </div>
                </div>
            `;
        });

        container.innerHTML = areasHTML;
    })
    .catch(error => {
        console.error('Error:', error);
    });