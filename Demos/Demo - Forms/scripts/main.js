document.registerform.addEventListener("submit", function(event){
    event.preventDefault();
    // let error_html = document.getElementById('firstname_error');
    // error_html.innerHTML = "";
    // if(document.registerform.firstname.value.length <= 0) {
    //     let p_html = document.createElement('p');
    //     p_html.innerText = "Le prénom est requis";
    //     error_html.appendChild(p_html);
    // }
    isRequired("firstname",'firstname_error',"Le prénom est requis")
});

const isRequired = function(inputName, error_id, message){
    let error_html = document.getElementById(error_id);
    error_html.innerHTML = "";
    if(document.registerform.elements[inputName].value.length <= 0) {
        let p_html = document.createElement('p');
        p_html.innerText = message;
        error_html.appendChild(p_html);
    }
}