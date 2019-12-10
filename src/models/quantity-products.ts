import { ProductModel } from "./product-model";
import { ConvertHelper } from "./../helpers/convert-helper";

/**
 * @name QuantityProduct
 * @author Aelion - Dec. 2019 - Stephanie
 * @package models
 * @version 1.0.0
 * 
 * Specify a product and unit of a product for a receipe 
 */
export class QuantityProduct extends ProductModel{
    /**
     * @var number
     * 
     * Required quantity of the product for the receipe
     */

     private quantity: number;

     /**
      * @var string
      * 
      * Unit for the quantity
      */

      private unit: string;

      public setQuantity(quantity: number): void{
          this.quantity= quantity;
      }
      public getQuantity(): number{
          return this.quantity;
      }
      public setUnit(unit: string) : void{
          this.unit =unit;
      }
      public getUnit(): string {
          return this.unit;
      }
      /**
       * @var number 
       * pricing of the product
       */
      private unitPrice: number;

      public setUnitPrice() :void{
          const convertedQuantity :number = ConvertHelper.weight(this.baseUnit, this.unit, this.quantity); 
          if (this.quantityUnit != null) {
              this.unitPrice = (this.price / this.quantityUnit) * convertedQuantity
          } else {
              this.unitPrice = this.price * convertedQuantity
          }
      }
     public getUnitPrice(): number {
      return this.unitPrice;
      }
      //price of production of 15 crepes
      // quantity * setunitprice of each product = productprice
      // costOfProduction = sum of each productPrice

}
