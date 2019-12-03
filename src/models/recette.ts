import { ProductModel } from "./product-model";

export class Recette{ 
    private ingredients: Array<ProductModel> = new Array<ProductModel>();
    private title: string;

    public constructor(title: string) {
        this.title = title;

    }
    public addProduct(product : ProductModel): void{
        this.ingredients.push(product); 
    }

    public toString(): string {
        let theRecette: string = ' La recette des ' + this.title + '\n';
        //loop over ingredients array
        this.ingredients.forEach((value: ProductModel) => { //polymorphisme ie même nom de methode mais différentes fonctions; 
            //je parcours le tableau des ingrédients, pour chaque éléments que je trouve dedans j'utilise la methode tostring.
            theRecette += value.toString() + '\n';
            //idem the Recette = the Recette + value.toString()
        })
        return theRecette; 
    }
}