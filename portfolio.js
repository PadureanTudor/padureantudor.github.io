let form = document.getElementById("add_project");

let name = document.getElementById("input-name"); 
let url = document.getElementById("input-url"); 
let image = document.getElementById("input-img"); 
let date = document.getElementById("input-date"); 
let description = document.getElementById("input-description"); 
let technologies = document.getElementById("input-technologies");

let projectTable = document.getElementById("dataTable");

function validareInput() {
    
    // Reset
    name.setCustomValidity("");
    url.setCustomValidity("");
    image.setCustomValidity("");
    date.setCustomValidity("");
    description.setCustomValidity("");
    technologies.setCustomValidity("");

    let ok = true;

    const namePattern = /^[A-Za-z\s]+$/;
    if(!namePattern.test(name.value)) {
        name.setCustomValidity("invalid");
        ok = false;
    }

    const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if(!urlPattern.test(url.value)) {
        url.setCustomValidity("invalid");
        ok = false;
    }

    const imagePattern = /^.*\.png$/;
    if(image.files.length !== 1) {
        image.setCustomValidity("invalid");
        ok = false;
    } else if(!imagePattern.test(image.files[0].name)) {
        image.setCustomValidity("invalid");
        ok = false;
    }

    if(Date.parse(date.value) > Date.now()) {
        date.setCustomValidity("invalid");
        ok = false;
    }
    

    if(description.value.length < 50) {
        description.setCustomValidity("invalid");
        ok = false;
    }

    if(technologies.value.length < 50) {
        technologies.setCustomValidity("invalid");
        ok = false;
    }
    return ok;
}

function actualizareTabel() {
    const row = document.createElement("tr");

    const nameNode = document.createElement("td");
    nameNode.textContent = name.value;
    row.append(nameNode);
    
    const descNode = document.createElement("td");
    descNode.textContent = description.value;
    descNode.className = "breakword";
    row.append(descNode);

    const urlNode = document.createElement("td");
    urlNode.textContent = url.value;
    row.append(urlNode);

    const techNode = document.createElement("td");
    techNode.textContent = technologies.value;
    techNode.className = "breakword";
    row.append(techNode);

    const imageNode = document.createElement("td");
    const imageContentNode = document.createElement("img");
    imageContentNode.src = URL.createObjectURL(image.files[0]);
    imageNode.appendChild(imageContentNode)
    row.append(imageNode);

    const dateNode = document.createElement("td");
    dateNode.textContent = date.value;
    row.append(dateNode);

    projectTable.appendChild(row);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validare
    let isValid = validareInput();
    if(!isValid) return; // Eroare

    // Actualizare 
    actualizareTabel();
    form.reset();
});