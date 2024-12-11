/*Seleccionar Articulo*/
var SelArt_Trabajos = document.querySelector("#Trabajos");
/*Crear Titulo*/
var name_article = document.createElement("h2");
name_article.textContent = "Trabajos";
SelArt_Trabajos.appendChild(name_article);
/*Crear seccion de bontones*/
var section_buttons = document.createElement("section");
section_buttons.className = "buttons";
SelArt_Trabajos.appendChild(section_buttons);
/*Crear seccion de cards*/
var section_cards = document.createElement("section");
section_cards.className = "cards";
SelArt_Trabajos.appendChild(section_cards)

function cargarJSON(callback) {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error al cargar el JSON:', error));
}

function cargarProjects(projects) {
    /*Cargar y crear secciones*/
    const button_todos = document.createElement("button");
    button_todos.textContent = "Todos";
    button_todos.addEventListener("click", () => boton_categoria("Todos"))
    section_buttons.appendChild(button_todos);
    for (const categoria in projects) {
        const button = document.createElement("button");
        button.textContent = categoria;
        button.addEventListener("click", () => boton_categoria(categoria))
        section_buttons.appendChild(button);
    };

    boton_categoria("Todos")
    /*Cargar y crear cards*/
    function boton_categoria(categoria) {
        const section_cards = SelArt_Trabajos.querySelector(".cards")
        section_cards.innerHTML = '';
        switch (categoria) {
            case "Todos":
                for (const categoria in projects) {
                    create_cards(projects[categoria])
                };
                break;
            case "Otros":
                break;
            default:
                create_cards(projects[categoria])
                break;
        }
    }
}

function create_cards(list) {
    const section_cards = SelArt_Trabajos.querySelector(".cards")
    for (const name_proyect in list) {
        const card = document.createElement("div");
        card.className = "card";
        const img = document.createElement("img");
        img.src = list[name_proyect].img;
        card.appendChild(img);
        const name = document.createElement("h4");
        name.textContent = name_proyect;
        card.appendChild(name);
        const tipo = document.createElement("p");
        tipo.textContent = list[name_proyect].tipo;
        card.appendChild(tipo);
        const elementos = document.createElement("p");
        elementos.textContent = list[name_proyect].elementos;
        card.appendChild(elementos);
        const opciones = document.createElement("div");
        card.appendChild(opciones);
        for (const name_boton in list[name_proyect].opciones) {
            const opcion = document.createElement("button");
            opcion.textContent = name_boton;
            opciones.appendChild(opcion);
        }
        section_cards.appendChild(card);
    }
}

cargarJSON(cargarProjects);