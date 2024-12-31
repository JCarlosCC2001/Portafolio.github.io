fetch('./json/ExperienciaLaboral.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('experiencia-laboral');

        let areasHTML = '';

        data.forEach(exp => {
            areasHTML += `
                <div class="container-small container-solid-1 card">
                    <img src="${exp.Img[0]}">
                    <h5>${exp.puesto}</h5>
                    <h4>${exp.empresa}</h4>
                    <span>${exp.fecha_inicio} – ${exp.fecha_fin}</span>
                    <p>${exp.descripcion}</p>
                </div>
            `;
        });

        container.innerHTML = areasHTML;
    })
    .catch(error => {
        console.error('Error:', error);
    });