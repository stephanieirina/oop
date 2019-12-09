import * as $ from 'jquery';
import { ReceipeFormModule } from './receipe-form-module';
export class IngredientFormModule {
    //defini l'objet form du document html donc this.form la referrence au formulaire
    private form: JQuery = $('#ingredient-form');
    private fields: Array<JQuery> = new Array();

    private addAndContinue: JQuery = $('#add-and-next');
    private addAndStop: JQuery = $('#add-and-close');

    

    public constructor() {
        // this.fields.push($('#ingredient-title'));
        //this.fields.push($('#ingredient-quantity'));
        //this.fields.push($('#ingredient-price'));
        //this.fields.push($('#base-unit'));
        //this.fields.push($('#target-unit'));
        //this.fields.push($('#unit-quantity'));
        this.getFormFields();
        //Sets the event handlers
        this.setEventHandlers();

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
    }
    
    private addIngredientAndStop(event: any): void {
        // Reset form...
        this.resetForm();

        // Hey Dude, did you think at the span of the legend ?
        // Sure not Hobiwan...
        this.form.children('fieldset').children('legend').children('span').html('');


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


