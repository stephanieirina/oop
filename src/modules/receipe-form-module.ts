import * as $ from 'jquery';
import { Recette } from './../models/recette';

export class ReceipeFormModule {
    private recette: Recette;

    public getRecette(): Recette{
        return this.recette;
    }


    public constructor() {
        this.setCreateButtonHandler();
        this.setFormKeyupHandler();
    }
    private setCreateButtonHandler(): void {
        $('#create-receipe').on(
            'click',
            (event: any): void => this.toggleIngredientForm(event)
        );
    }
    public static resetForm(): void {
        $('#create-receipe').attr('disabled', 'disabled');
        $('#receipe-title').val('');
        $('#receipe-title').removeAttr('disabled');
        $('#receipe-quantity').val('');
        $('#receipe-quantity').removeAttr('disabled');
    }
    private setFormKeyupHandler(): void{
        $('#receipe-form').on(
            'keyup change',
            (event: any): void => this.checkFormFill(event)
        );
    }
    private checkFormFill(event: any): void {
        //throw new Error("Method not implemented.");
        //console.info('Hey dude, you use the keyboard');
        if (
            $('#receipe-title').val().toString().trim() != '' && 
            $('#receipe-quantity').val().toString().trim() != ''){
            $('#create-receipe').removeAttr('disabled');
        } else {
            $('#create-receipe').attr('disabled', 'disabled');
        }
        
    }

    /**public static resetForm(): void {
        $('#receipe-title').val('').removeAttr('');
        $('')
    }
    */
    private toggleIngredientForm(event: any): void {
        if ($('#ingredient-form').hasClass('hidden-form')) {
            //Sets the span for the user
            $('#ingredient-form fieldset legend span').html($('#receipe-title').val().toString());
            //have to remove the hidden form
            $('#ingredient-form').removeClass('hidden-form').addClass('animated swing');
            this.recette= new Recette($('#receipe-title').val().toString()); //ie portée de la recette stop à la sortie de la méthode
            this.recette.setQuantity(parseInt($('#receipe-quantity').val().toString()));
            // "disabled" the form components: fields and button
            $('#create-receipe').attr('disabled', 'disabled');
            $('#receipe-title').attr('disabled', 'disabled');
            $('#receipe-quantity').attr('disabled', 'disabled');
        }
    }

}