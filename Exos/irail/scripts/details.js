let url = new URL(window.location.href);
let id = url.searchParams.get("id");

const showDetails = function(data){
    let h1_html = document.createElement('h1');
    h1_html.innerText = data.station;
    document.body.appendChild(h1_html);
    if(data.departures.number == "0"){
        let p_html = document.createElement('p');
        p_html.innerText = `Aucun train en partance de ${data.station}`;
        document.body.appendChild(p_html);
    }
    else{
        let departs = data.departures.departure;
        let table_html = document.createElement('table');
        document.body.appendChild(table_html);
        for (const depart of departs) {
            addDepart(depart, table_html);
        }
    }
}

const addDepart = function(data, html_elem){
    let tr_html = document.createElement('tr');
    let td_dest_html = document.createElement('td');
    let td_quai_html = document.createElement('td');
    let td_time_html = document.createElement('td');
    html_elem.appendChild(tr_html);
    tr_html.appendChild(td_time_html);
    tr_html.appendChild(td_dest_html);
    tr_html.appendChild(td_quai_html);
    td_time_html.innerText = showTime(new Date(parseInt(data.time)*1000));
    td_dest_html.innerText = data.station;
    td_quai_html.innerText = data.platform;
}

const showTime = function(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${(hours<10)?'0'+hours: hours} : ${(minutes<10)?'0'+minutes: minutes}`
}

const showError = function(error){
    let p_html = document.createElement('p');
    p_html.innerText = "Erreur API";
    document.body.appendChild(p_html);
}

getData(`liveboard/?format=json&lang=fr&id=${id}`,showDetails, showError);