/*Seleccionar Articulo*/
var Selec_Article = document.querySelector("#Servicios");
/*Crear Titulo*/
var name_article = document.createElement("h2");
name_article.textContent = "Servicios";
Selec_Article.appendChild(name_article);
/*Crear seccion de cards*/
var section_cards = document.createElement("section");
Selec_Article.appendChild(section_cards);

function cargarJSON(callback) {
    fetch('services.json')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error al cargar el JSON:', error));
}

function cargarServicios(services) {
    for (const servicio in services) {

        if (services.hasOwnProperty.call(services, servicio)) {
            console.log(servicio);
            createCard(servicio, services[servicio].Descripcion);
        }
    }
}

function createCard(name, descrip) {
    /*Crear Carta*/
    const card = document.createElement("div");
    card.className = "Servicio";
    section_cards.appendChild(card);
    /*crear contenido de card*/
    const name_card = document.createElement("h4");
    name_card.textContent = name;
    card.appendChild(name_card);
    const descripcion = document.createElement("p");
    descripcion.textContent = descrip;
    card.appendChild(descripcion);
    const opciones = document.createElement("div");
    opciones.className = "opciones";
    card.appendChild(opciones)
    const opcion = document.createElement("button");
    opcion.textContent = "Ver Trabajos";
    opciones.appendChild(opcion);
}
cargarJSON(cargarServicios);