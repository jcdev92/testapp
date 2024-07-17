import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
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

  public addCharacter(character: Character): void {
    this.characters.push(character)
  }

  public removeCharacter(index: number): void {
    this.characters.splice(index, 1)
  }
  constructor() { }
}
