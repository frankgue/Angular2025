import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('editForm') shoppingListForm: NgForm;
  private editSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.editSubscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onSubmitItem() {
    const name = this.shoppingListForm.value.name;
    const amount = this.shoppingListForm.control.get('amount').value;
    const ingredient = new Ingredient(name, amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppingService.addIngredient(ingredient);
    }
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }
}
