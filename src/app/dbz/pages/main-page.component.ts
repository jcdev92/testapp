import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService) {

   }

   get characters() {
     return [...this.dbzService.characters];
   }

   onDelete(id: string) {
     this.dbzService.deleteCharacterById(id);
   }

   onCreate(character: Character) {
     this.dbzService.addCharacter(character);
   }

}
