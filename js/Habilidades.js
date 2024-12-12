fetch('./json/Habilidades.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('habilidades');

        for (const categoria in data) {
            if (Object.prototype.hasOwnProperty.call(data, categoria)) {
                if (data[categoria]['State'] === 'activated') {
                    const habilidades = data[categoria]["Contenido"];

                    const listDiv = document.createElement('div');
                    listDiv.classList.add('list');

                    const title = document.createElement('h3');
                    title.textContent = categoria;
                    listDiv.appendChild(title);

                    const albumDiv = document.createElement('div');
                    albumDiv.classList.add('container-small', 'container-solid-1', 'albun');

                    habilidades.forEach(habilidad => {
                        if (habilidad['State'] === 'activated') {
                            const img = document.createElement('img');
                            img.src = habilidad.Img.light;
                            albumDiv.appendChild(img);
                        }

                    });

                    listDiv.appendChild(albumDiv);
                    container.appendChild(listDiv);
                }
            }
        }
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
