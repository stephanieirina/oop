import { Recette } from "./models/recette";
import { QuantityProduct } from "./models/quantity-products";

/** 
 * @name main
 * @author Aelio - Dec. 2019 - Stephanie
 * @version 1.0.0
 * Entry point of the application
 */

 const strategy : number =1;


 const lesCrepes: Recette = new Recette(' Crepes'); 
 //const lesGauffres: Recette = new Recette(' gauffres');
 lesCrepes.setQuantity(15)

 let produit1: QuantityProduct = new QuantityProduct(); //instanciation de la classe // :ProductModel type de variable
 produit1.setName('farine');
 produit1.setBaseUnit('kg');
 produit1.setPrice(1.8);
 produit1.setStrategy(strategy);
 produit1.setQuantity(300);
 produit1.setUnit('g');
 //produit1.setTargetQuantity('g');

 let produit2: QuantityProduct = new QuantityProduct();
 produit2.setName('lait');
 produit2.setBaseUnit('l');
 produit2.setPrice(0.94);
 produit2.setStrategy(strategy);
 produit2.setQuantity(60);
 produit2.setUnit('cl');
// produit2.setTargetQuantity('cl');


 let produit3: QuantityProduct = new QuantityProduct();
 produit3.setName('Oeufs');
 produit3.setBaseUnit('Unite');
 produit3.setPrice(0.22);
 produit3.setStrategy(strategy);
 produit3.setQuantity(3);
 produit3.setUnit('Unite');
 
 let produit4: QuantityProduct = new QuantityProduct();
 produit4.setName('Sucre');
 produit4.setBaseUnit('kg');
 produit4.setPrice(0.62);
 produit4.setStrategy(strategy);
 produit4.setQuantity(60);
 produit4.setUnit('g');

 let produit5: QuantityProduct = new QuantityProduct();
 produit5.setName('Rhum');
 produit5.setBaseUnit('cl');
 produit5.setPrice(9.65);
 produit5.setStrategy(strategy);
 produit5.setQuantity(5);
 produit5.setUnit('cl');
 produit5.setQuantityUnit(70);


 let produit6: QuantityProduct = new QuantityProduct();
 produit6.setName('Beurre');
 produit6.setBaseUnit('kg');
 produit6.setPrice(19.60);
 produit6.setStrategy(strategy);
 produit6.setQuantity(50);
 produit6.setUnit('g');


 lesCrepes.addProduct(produit1);
 lesCrepes.addProduct(produit2);
 lesCrepes.addProduct(produit3);
 lesCrepes.addProduct(produit4);
 lesCrepes.addProduct(produit5);
 lesCrepes.addProduct(produit6);
 
 /**
  * lesCrepes.addProduct(produit3);
 lesCrepes.addProduct(produit4);
 lesCrepes.addProduct(produit5);
 lesCrepes.addProduct(produit6);
  */
 

 //lesGauffres.addProduct(produit1);
 //lesGauffres.addProduct(produit2);

 console.log(lesCrepes.toString());
 //console.log(lesGauffres.toString());

 //console.log('Pour faire des crêpes j ai besoin');
 //console.log(produit1.toString());
 //console.log(produit2.toString());
 //console.log(produit3.toString()); 
 //console.log(produit4.toString());
 

 //console.log('Produit 1 ' + produit1.getName());

 //console.log('Produit 1 ' + produit1.getBaseUnit());
 //console.log('Produit 1 '+ produit1.getPrice());
 