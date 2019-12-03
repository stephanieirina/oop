import {ProductModel} from "./models/product-model";
import { Recette } from "./models/recette";

/** 
 * @name main
 * @author Aelio - Dec. 2019 - Stephanie
 * @version 1.0.0
 * Entry point of the application
 */

 const strategy : number =3;

 const lesCrepes: Recette = new Recette(' Crepes'); 
 const lesGauffres: Recette = new Recette(' gauffres');


 let produit1: ProductModel = new ProductModel(); //instanciation de la classe // :ProductModel type de variable
 produit1.setName('farine');
 produit1.setBaseUnit('kg');
 produit1.setPrice(1.8);
 produit1.setStrategy(strategy);
 //produit1.setTargetQuantity('g');

 let produit2: ProductModel = new ProductModel();
 produit2.setName('lait');
 produit2.setBaseUnit('l');
 produit2.setPrice(0.94);
 produit2.setStrategy(strategy);
 //produit2.setTargetQuantity('cl');


 let produit3: ProductModel = new ProductModel();
 produit3.setName('Beurre');
 produit3.setBaseUnit('g');
 produit3.setPrice(19.60);
 produit3.setStrategy(strategy);
 
 let produit4: ProductModel = new ProductModel();
 produit4.setName('Sucre');
 produit4.setBaseUnit('g');
 produit4.setPrice(0.69);
 produit4.setStrategy(strategy);

 lesCrepes.addProduct(produit1);
 lesCrepes.addProduct(produit2);
 lesCrepes.addProduct(produit3);
 lesCrepes.addProduct(produit4);

 lesGauffres.addProduct(produit1);
 lesGauffres.addProduct(produit2);

 console.log(lesCrepes.toString());
 console.log(lesGauffres.toString());

 //console.log('Pour faire des crêpes j ai besoin');
 //console.log(produit1.toString());
 //console.log(produit2.toString());
 //console.log(produit3.toString()); 
 //console.log(produit4.toString());
 

 //console.log('Produit 1 ' + produit1.getName());

 //console.log('Produit 1 ' + produit1.getBaseUnit());
 //console.log('Produit 1 '+ produit1.getPrice());
 