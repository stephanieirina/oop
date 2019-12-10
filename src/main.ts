import *as $ from 'jquery'; 
import { ReceipeFormModule } from './modules/receipe-form-module';
import { IngredientFormModule } from './modules/ingredient-form-module';
// import de toutes les fonctionnalités de Jquery
/**
 * @name Main
 * @author Aelion - Déc. 2019 
 * @package
 * @version 1.1.0
 */

 //contructor: méthode pour créer et initialiser un objet lorsqu'on utilise la class Main
 // $ contient le Document Object Model, fait appel aux autres fichiers.
 //'h1' est l'élément cherché par le DOM
 // .html la méthode 
 //(' ') ce qui va s'afficher 
 // "ranges moi le texte 'hello' dans toutes mes balises h1"
export class Main{
    public constructor(){
       // $('h1').html('Hello from jQuery'); 
       const receipe: ReceipeFormModule = new ReceipeFormModule();
       new IngredientFormModule(receipe);
    }
}

//App bootstrapping with jQuery
//App Initializer (new instance of main class)
//after the document was completely loaded
$(document).ready(() => {

const app: Main = new Main();
});
