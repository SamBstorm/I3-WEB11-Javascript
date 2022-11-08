/**Ordre de création d'une class:
 * 
 * class NomDeLaClass {
 * 
 *      variableMembre;
 * 
 *      get Propriete(){
 *          return this.variableMembre;
 *      }
 * 
 *      set Propriete(value){
 *          this.variableMembre = value
 *      }
 * 
 *      constructor(param1){
 *          this.Propriete = param1
 *      }
 * 
 *      Fonctionnalite(){
 *          instructions...
 *      }
 * }
 */
class Rectangle{
    #longueur;
    #largeur;
    #borderCol;
    #backCol;

    get Longueur(){
        return this.#longueur;
    }
    
    set Longueur(value){
        if(typeof(value)!=typeof(0) || isNaN(value)) 
            throw new TypeError(`Longueur n'est pas un nombre... : ${value}`);
        this.#longueur = value;
    }

    get Largeur(){
        return this.#largeur;
    }

    set Largeur(value){
        if(typeof(value)!=typeof(0) || isNaN(value)) 
            throw new TypeError(`Largeur n'est pas un nombre... : ${value}`);
        this.#largeur = value;
    }
    
    get Perimetre(){
        return (this.Longueur + this.Largeur) *2
    }

    constructor(cote1, cote2, border, color){
        if(cote1 >= cote2){
            this.Largeur = cote2;
            this.Longueur = cote1;
        }
        else{
            this.Largeur = cote1;
            this.Longueur = cote2;
        }
        this.#borderCol = border;
        this.#backCol = color;
    }

    Dessiner(){
        let rect_html = document.createElement('div');
        document.body.appendChild(rect_html);
        rect_html.style.width=this.Largeur+'px';
        rect_html.style.height=this.Longueur+'px';
        rect_html.style.backgroundColor = this.#backCol;
        rect_html.style.border = `1px solid ${this.#borderCol}`;
    }
}

try{
    let rect = new Rectangle(45,70,'Red','Pink');

    // rect.largeur = 45;
    // rect.longueur = 70;

    console.log(`Mon rectangle a pour longueur ${rect.Longueur} et pour largeur ${rect.Largeur}.`);
    rect.Largeur = 135;
    console.log(`Le périmètre de mon rectangle est de ${rect.Perimetre}.`);
    rect.Dessiner();
}
catch(error){
    console.log(`Oups! une erreur c'est produite...`);
    console.warn(error.message);
}
console.log('toto');