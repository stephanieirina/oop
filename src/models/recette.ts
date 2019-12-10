
import { QuantityProduct } from "./quantity-products";

export class Recette {
    private ingredients: Array<QuantityProduct> = new Array<QuantityProduct>();
    private title: string;
    private quantity: number =1;
    private price: number =0;

    public constructor(title: string) {
        this.title = title;

    }
    public getPrice(): number {
        return this.price;

    }

    private unitPrice: number;
    public getUnitPrice(): number {
        return this.unitPrice;
        }


    public setQuantity(quantity: number): void{
        this.quantity = quantity;
    }

    public addProduct(product: QuantityProduct): void {
        product.setUnitPrice();
        console.log (`Prix pour ${product.getName()} : ${product.getUnitPrice()}`);
        this.price += product.getUnitPrice();
        this.ingredients.push(product);
        this.unitPrice = this.price/this.quantity; 
    }

    public toString(): string {
        let theRecette: string = ' La recette des ' + this.title + '\n';
        //loop over ingredients array
        this.ingredients.forEach((value: QuantityProduct) => { //polymorphisme ie même nom de methode mais différentes fonctions; 
            //je parcours le tableau des ingrédients, pour chaque éléments que je trouve dedans j'utilise la methode tostring.
            theRecette += value.toString() + '\n';
            //idem the Recette = the Recette + value.toString()
        });
        const unitPrice = this.price / this.quantity;

        theRecette += `Cout de production : ${unitPrice}`;
        return theRecette;
    }
}