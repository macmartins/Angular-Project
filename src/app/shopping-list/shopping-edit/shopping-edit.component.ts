import { Component, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>;

  constructor (private shoppingListService: ShoppingListService) {}

  handleAdd = () => {
    this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value, Number(this.amountInput.nativeElement.value)))
  }
}
