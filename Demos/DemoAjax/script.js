const list_html = document.getElementById("list");

function getData(success, error){
    let xhr = new XMLHttpRequest() //Création de l'outil de requête

    xhr.onreadystatechange = function() {  //que faire pendant la demande au serveur
        if(xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            success(xhr.responseText)
        }
        else if(xhr.readyState == 4 && xhr.status != 200) {
            error(xhr.error)
        }
    }
    
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true)
    
    xhr.send() //dernière étape, envoyer l'objet contenant la requête au serveur
    
}

function showError(error){
    console.log(error)
}

function showList(data){
    list_html.innerHTML = ""; 
    let ul = document.createElement("ul")
    let objet = JSON.parse(data)
    objet.results.forEach(el => {
        let li = document.createElement("li")
        li.innerText = el.name
        ul.appendChild(li)
    });

    let div = document.getElementById("list")
    div.appendChild(ul)
}

function showTable(data){
    list_html.innerHTML = ""; 
    let table = document.createElement("table")
    let objet = JSON.parse(data)
    objet.results.forEach(el => {
        let tr = document.createElement("tr");
        let td_name = document.createElement("td");
        let td_url = document.createElement("td");
        td_name.innerText = el.name
        td_url.innerText = el.url
        table.appendChild(tr)
        tr.appendChild(td_name)
        tr.appendChild(td_url)
    });

    let div = document.getElementById("list")
    div.appendChild(table)
}

getData(showList, showError);
list_html.innerText = "Chargement en cours...";
