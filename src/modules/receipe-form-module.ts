import * as $ from 'jquery';

export class ReceipeFormModule{
    public constructor(){
        this.setCreateButtonHandler();
    }
        private setCreateButtonHandler(): void {
            $('#create-receipe').on(
                'click', 
                (event: any) : void => this.toggleIngredientForm(event)
            );
        }
    private toggleIngredientForm(event: any): void {
        if($('#ingredient-form').hasClass('hidden-form')){
//have to remove the hidden form
            $('#ingredient-form').removeClass('hidden-form');
        } else{
// have to add the hidden form
            $('#ingredient-form').addClass('hidden-form');
        }
    }
    
}