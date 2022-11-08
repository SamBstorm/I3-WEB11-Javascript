class Tamagotchi{
    #name;
    #color;
    #birthdate;

    get Name(){
        return this.#name;
    }

    get Color(){
        return this.#color;
    }

    get DaysOld(){
        return Math.floor((new Date().getTime() - this.#birthdate.getTime())/86_400_000);
    }

    constructor(name, color, bdate = new Date()){
        this.#name = name;
        this.#color = color;
        this.#birthdate = bdate;
    }
}

const createFormHtml = document.getElementById("create-form");
const validateFormBtnHtml = document.getElementById("validate-form-btn");
const tamaHtml = document.getElementById("tama-container");
tamaHtml.hidden = true;

validateFormBtnHtml.addEventListener('click',
    function(){
        let name = document.getElementById("name").value;
        if(!name) throw new Error('Name field invalid...');
        let color = document.getElementById("color").value;
        if(!color) throw new Error('Color field invalid...');
        let tama = new Tamagotchi(name, color);
        createFormHtml.hidden = true;
        tamaHtml.hidden = false;
        document.getElementById("tama-circle").style.backgroundColor = tama.Color;
        document.getElementById("tama-name").innerText = tama.Name;
        document.getElementById("tama-days").innerText = `${tama.DaysOld} jour${(tama.DaysOld>1)?'s':''}`;
    }
);