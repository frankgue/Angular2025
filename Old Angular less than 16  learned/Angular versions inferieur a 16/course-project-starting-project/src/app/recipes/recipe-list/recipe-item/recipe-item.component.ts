import { Component, EventEmitter, Input, Output } from '@angular/core';;

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input({ required: true }) recipeItem;
  @Input({ required: true }) index: number;

}
