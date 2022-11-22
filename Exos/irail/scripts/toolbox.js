const URL_API = "https://api.irail.be/";

const getData = function(url_option,success, error){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4) {
            if(Math.floor(xhr.status/100) == 2){
                let data = JSON.parse(xhr.responseText);
                success(data);
            }
        }
    }

    xhr.onerror = error;

    xhr.open("GET", `${URL_API}${url_option}`,true);

    xhr.send();
}