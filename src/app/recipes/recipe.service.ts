import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'This is a test recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
        new Recipe('A Test Recipe 2', 'This is a test recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg')
      ];

    getRecipes() {
        return [...this.recipes];
    }
}