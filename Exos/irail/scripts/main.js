const list_html = document.getElementById("list");

const showList = function(data){
    let stations = data.station;
    list_html.innerHTML = "";
    if(stations.length > 0){
        let ul_html = document.createElement('ul');
        list_html.appendChild(ul_html);
        for (const station of stations) {
            let li_html = document.createElement('li');
            let a_html = document.createElement('a');
            a_html.href = `./details.html?id=${station.id}`;
            a_html.innerText = station.name;
            li_html.appendChild(a_html);
            ul_html.appendChild(li_html);
        }
    }
    else{
        p_html = document.createElement('p');
        p_html.innerText = `Aucune station n'est enregistrée...`
        list_html.appendChild(p_html);
    }
}

const showError = function(error){
    let p_html = document.createElement('p');
    p_html.innerText = `Erreur API`;
    console.log(error)
    list_html.appendChild(p_html);
}

getData(`stations/?format=json&lang=fr`,showList,showError);