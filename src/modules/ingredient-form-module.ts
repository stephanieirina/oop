import * as $ from 'jquery';
import { ReceipeFormModule } from './receipe-form-module';
import { on } from 'cluster';
import { QuantityProduct } from './../models/quantity-products';
import { Recette } from './../models/recette';
import { ModalModule } from './modal-modules';
export class IngredientFormModule {
    //defini l'objet form du document html donc this.form la referrence au formulaire
    private form: JQuery = $('#ingredient-form');
    private fields: Array<JQuery> = new Array();

    private addAndContinue: JQuery = $('#add-and-next');
    private addAndStop: JQuery = $('#add-and-close');

    private checkAll: JQuery= $('#select-all');
    private receipe: ReceipeFormModule; 

    public constructor(receipe: ReceipeFormModule) {
        // dependancy injection: ingredient depends on receipe
        this.receipe = receipe; 
        // this.fields.push($('#ingredient-title'));
        //this.fields.push($('#ingredient-quantity'));
        //this.fields.push($('#ingredient-price'));
        //this.fields.push($('#base-unit'));
        //this.fields.push($('#target-unit'));
        //this.fields.push($('#unit-quantity'));
        this.getFormFields();
        //Sets the event handlers
        this.setEventHandlers();
      //  this.recette = new Recette($('#receipe-title').val().toString());   // don't work
      //  this.recette.setQuantity(parseInt($('#receipe-quantity').val().toString()));   // don't work

       // console.log('La recette :' + JSON.stringify(this.recette));

    }
 
    private setEventHandlers() {
        this.form.on(
            'keyup change',
            (event: any): void => this.checkFormFill(event)
        );
        this.addAndContinue.on(
            'click',
            (event: any): void => this.addIngredient(event)
        );

        this.addAndStop.on(
            'click',
            (event: any): void => this.addIngredientAndStop(event)
        );
        this.checkAll.on(
            'click',
            (evant: any): void =>this.checkAllCheckBox()
        );
        $('tbody').on(
            'click',
            '.ingredient-selection',
            (event: any) =>this.manageSelectAllCheckBox(event)
        )
    }
    private manageSelectAllCheckBox(event: any): any {
        if($('tbody .ingredient-selection:checked').length == $('tbody tr').length){
            this.checkAll.prop('checked', true)} else {
                this.checkAll.prop('checked', false);
            }

        }
        //console.log('Try again');
    private checkAllCheckBox(): void {

        if (this.checkAll.is(':checked')){
        //console.log("checkall was hicked.");}
        $('tbody .ingredient-selection').prop('checked', true);
        }
        else {
            $('tbody .ingredient-selection').prop('checked', false);
          
        }
            //console.log('no');}
    }
    private addRow(): void{
        const ingredient: QuantityProduct = this.createObject(); 
        const tableRow: JQuery = $('<tr>');  //create element in DOM, add html 
        const checkboxCell: JQuery=$('<td>');
        // add checkbox to the cell
        const checkbox: JQuery=$('<input>');
        checkbox.attr('type', 'checkbox'); 
        checkbox.addClass('ingredient-selection'); 
        let tableLength: number =$('aside#receipe-results table tbody tr').length+1; 
        console.log(`Next checkbox id: ${tableLength}`);
        checkbox.attr('id', 'ingredient-' + tableLength);
        checkboxCell.append(checkbox);

        const ingredientTitleCell: JQuery=$('<td>');
        ingredientTitleCell.html(ingredient.getName());
        const ingredientQuantityCell: JQuery=$('<td>');
        ingredientQuantityCell.html(ingredient.getQuantity() + ' '+ ingredient.getUnit());
        const unitPriceCell: JQuery=$('<td>'); //table divider
        unitPriceCell.html(ingredient.getUnitPrice().toString());

        //Add cells to row
        tableRow
            .append(checkboxCell)
            .append(ingredientTitleCell)
            .append(ingredientQuantityCell)
            .append(unitPriceCell);

        //Add row to tbody
        $('aside#receipe-results table tbody').append(tableRow); 
        /** //update totals
        $('#total-receipe').html(this.receipe.getRecette().getPrice().toString());
        $('#one-piece-total').html(this.receipe.getRecette().getUnitPrice().toString());*/ 
    }
    
    private addIngredientAndStop(event: any): void {
       //add row
       this.addRow();
        const modalModule: ModalModule = (new ModalModule(this)); 
        modalModule.show(); 
        // Reset form...
        this.resetForm();

        // Hey Dude, did you think at the span of the legend ?
        // Sure not Hobiwan...
        this.form.children('fieldset').children('legend').children('span').html('');
        //Call the outer modal to be hidden
        $('.outer-modal .content strong').html(this.receipe.getRecette().getTitle()); 
        $('.outer-modal').removeClass('hidden');

        this.form
            .removeClass('fadeInUp')
            .removeClass('animated')
            .addClass('animated')
            .addClass('fadeOutDown');
        setTimeout(() => {
            this.form.removeClass('animated').removeClass('fadeOutDown');
            this.form.addClass('hidden-form');
        }, 1500);
        // Then reset the previous form... but... don't forget you got a receipe-form-module...
        // So use it
        ReceipeFormModule.resetForm();
    }
    private addIngredient(event: any): void {
        this.addRow();
         // Reset form too...
        this.resetForm();
    }

    private resetForm() {
        for (const field of this.fields) {
            if (field.is('input')) {
                // Hey guy... if unit-quantity, reset to one !!!
                if (field.attr('id') == 'unit-quantity') {
                    field.val('1');
                } else {
                    field.val('');
                }
                
            } else {
                // Hey... how do i move the selected option to the first one ?
                field.children('option').removeAttr('selected');
                field.children('option:first').attr('selected', 'selected');
            }
        }
        // Don't forget to disable buttons... but it's so easy
        $('[addIngredientButton]').attr('disabled', 'disabled');
    }

private createObject(): QuantityProduct{
    const ingredient: QuantityProduct = new QuantityProduct();
    //instancier une class = faire un new de la class
    ingredient.setName($('#ingredient-title').val().toString());
    ingredient.setBaseUnit($('#base-unit').children('option:selected').val().toString());
    ingredient.setPrice(parseFloat($('#ingredient-price').val().toString()));
    ingredient.setQuantity(parseInt($('#ingredient-quantity').val().toString()));
    ingredient.setUnit($('#target-unit').children('option:selected').val().toString()); 
    ingredient.setQuantityUnit(parseInt($('#unit-quantity').val().toString())); 

    
   //add ingredient to receipe
   // this.recette.addProduct(ingredient); //don't work 
    //DI using: from ReceipeFormModule, gets Recette object and push ingredient
   this.receipe.getRecette().addProduct(ingredient); // step 1
   console.log('receipe update '+ JSON.stringify(this.receipe.getRecette()));

    //compute the unit price
   // ingredient.setUnitPrice(); //step 2

 
    return ingredient;

}

 //for in itérable objet, for of énumérable 
    private checkFormFill(event: any): void {
    let fieldValue: string;
    let numberOfError: number = 0;

    for(let field of this.fields) {
    //if(field.val().toString().trim() == ''){
    //
    if (field.is('input')) {
        fieldValue = field.val().toString().trim();
    } else {
        fieldValue = field.children('option:selected').val().toString();
    }
    if (fieldValue == '') {
        console.warn(`On a un problème sur ${field.attr('id')}`);  //extrapolation 
        numberOfError = numberOfError + 1;
    }
}
//At the end...
if (numberOfError === 0) {
    //yeah...
    this.addAndContinue.removeAttr('disabled');
    this.addAndStop.removeAttr('disabled');
} else {
    //Users are fck bastards.
    this.addAndContinue.attr('disabled');
    //add class add ingredient html
    //$('.add ingredient')
    //addIngredientButton en html (créer une attribut en html5)
    //$('[addIngredientButton])
    this.addAndStop.attr('disabled');
}
    }
    private getFormFields(): void {
    const fieldTypes: any = {
        field: 'input',
        list: 'select'
    };
    for(const key in fieldTypes){
    this.form.find(fieldTypes[key]).each((index: number, element: HTMLElement) => {
        this.fields.push($(element));
    })
}
    }
}


