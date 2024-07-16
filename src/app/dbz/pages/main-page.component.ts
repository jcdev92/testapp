import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 9000
    },
    {
      name: 'Krilin',
      power: 3000    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ]

}
