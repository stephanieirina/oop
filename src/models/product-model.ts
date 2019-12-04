/**
 * @name ProductModel
 * @author Aelion - Dec. 2019 - Stephanie
 * @version 1.0.0
 * @package models
 */
//abstract: class ne peut être instancier. 
export abstract class ProductModel {
    /**
     * Name of the product (i.e :Lait, farine, oeuf...) instance de class
     */
    protected name: string;
    /**
     * @var string
     */
    public setName(name: string): void{
        if (this.name == null) {
            this.name = name;
        }
        
    } //methode setName qui a un attribut name de type string et ne retourne à rien Void
     // set/ definition d'un setter (mutateur) vers 

    // get/ definition d'un getter (accesseur)
    
    public getName() : string {
        return this.name.toUpperCase();
        
    } 
     protected baseUnit : string; // public: niveau d'encapsulation , determine que l'attribut est accessible dans un autre fichier ex.main
    
    
    public setBaseUnit(baseUnit : string) : void {
        this.baseUnit = baseUnit;
    }

    /**
     * getBaseUnit
  : string  
  return this.baseUnit;  */
    public getBaseUnit() : string {
        return this.baseUnit;
        
    }

   
    protected price : number;
    public setPrice(price : number) {
        return this.price = price;
    }
    /**
     * getPrice
  : number  
  return this.price;  */
    public getPrice() : number {
        return this.price;
        
    }
    /**
     * name
     */
    

    protected targetQuantity : number;
    public setTargetQuantity(targetQuantity: number) {
        return this.targetQuantity = targetQuantity;
    }
    public getTargetQuantity() : number {
        return this.targetQuantity;
    }
    protected strategy : number;
    public setStrategy(strategy: number) : void {
        if (strategy> 0 && strategy <= 3) {
            this.strategy = strategy;
        } else {
            this.strategy = 1; //fallback
        }
    }

    public setQuantity (targetQuantity: number): void {
        this.targetQuantity=targetQuantity
    }
    public getQuantity (): number {
        return this.targetQuantity
    } 
    protected quantityUnit: number;
    public setQuantityUnit(quantityUnit: number){
        return this.quantityUnit = quantityUnit;
    }



    public toString(): string {
        //toString pour afficher quelque chose
        //  if(type == 1){
        //      return this.getName(); dans main toString(parametre)
        switch(this.strategy) {
            case 1: //name only
            return this.name;
            break
            case 2: //name + baseUnit
            return this.name + ' [ ' + this.baseUnit +' ] ';
            break
            case 3: //name + baseunit + price
            return this.name + ' [ ' + this.baseUnit + ' ] [ ' + this.price +' ] ' ; 
            break
        }
          }
          //return this.getName() + ' [' + this.baseUnit + ' ]' + this.price; 
  
    
}