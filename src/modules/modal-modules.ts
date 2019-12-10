import * as $ from 'jquery';
import { IngredientFormModule } from './ingredient-form-module';

export class ModalModule{
    private myModal: JQuery = $('.outer-modal');
    private form: IngredientFormModule;

    public constructor(form: IngredientFormModule){
        this.form = form; 
        $('.outer-modal strong').html(this.form.getReceipeTitle()); 

        this.setEventHandlers(); 
    
    }

    public show(): void{
        this.myModal.removeClass('hidden');
    
    }
    public hide(): void{
        this.myModal.addClass('hidden');
    }


    private setEventHandlers(): void{
        $('div.footer button.btn-primary').on(
            'click',
            (event: any): void => this.yesButton(event)
        );
        $('div.footer button.btn-danger').on(
            'click',
            (event: any): void => this.noButton(event)
        );

    }
    private noButton(event: any): void {
        $('#receipe-results table tbody tr').remove();
        $('.total-receipe').html('0€');
        this.hide();
    }
    private yesButton(event: any): void {
        const receipes: string = localStorage.getItem('receipes'); //localstorage native object of html5 one url; navigateur
        if(receipes != null){
            //receipes key in locals exists
           const existingReceipes: Array<any>= JSON.parse(receipes)
           existingReceipes.push(this.form.getReceipe());
           localStorage.setItem('receipes', JSON.stringify(existingReceipes));
        } else {
            const updateReceipes: Array<any>=[
                this.form.getReceipe()
            ];
            localStorage.setItem('receipes', JSON.stringify(updateReceipes));
           
        }
        //clear tr in table..
        $('#receipe-results table tbody tr').remove();
        $('.total-receipe').html('0€');
        this.hide(); 
    }


}