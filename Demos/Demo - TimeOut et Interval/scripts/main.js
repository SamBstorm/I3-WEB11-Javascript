const creer_titre = function (titre){
    let html_h1 = document.createElement('h1')
    html_h1.innerText = titre
    html_h1.classList.add('rose')
    document.body.append(html_h1)
}

const changer_couleur = function(){
    let html_h1 = document.querySelector('h1')
    if (html_h1) {
        if(html_h1.classList.contains('bleu')){
            html_h1.classList.add('rose')
            html_h1.classList.remove('bleu')
        }
        else{
            html_h1.classList.add('bleu')
            html_h1.classList.remove('rose')
        }
    }
}

/* Methode 1 : Création d'une fontion nommée sans paramètre */
// const set_function = function(){
//     creer_titre("Toto")
// }

// setTimeout(set_function , 6000)

/* Methode 2 : Création d'une fontion anonyme sans paramètre */
// setTimeout(function(){creer_titre("Toto")}, 6000)


/* Methode 3 : Création d'une fontion fléchée sans paramètre */
let id_timeout = setTimeout(() => creer_titre("Toto"), 6000)
let id_interval = setInterval(changer_couleur, 1000)

let btn_timeout = document.getElementById('btn_timeout')
let btn_interval = document.getElementById('btn_interval')

btn_timeout.addEventListener('click', ()=> clearTimeout(id_timeout) )
btn_interval.addEventListener('click', ()=> clearInterval(id_interval) )