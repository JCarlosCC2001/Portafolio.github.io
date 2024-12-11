fetch('/json/AreasEspecializacion.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('areas-especializacion');

        let areasHTML = '';

        data.forEach(area => {
            areasHTML += `
                <div class="container-small container-solid-1 card">
                    <img src="${area.Img[0]}" alt="${area.Img[0]}">
                    <h5>${area.Nombre}</h5>
                    <span>(${area.Habilidades.join(', ')})</span>
                    <button class="button button-2">Ver Certificados</button>
                </div>
            `;
        });

        container.innerHTML = areasHTML;
    })
    .catch(error => {
        console.error('Error:', error);
    });