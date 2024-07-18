import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Krilin',
      power: 3000    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ]

  public addCharacter(character: Character): void {
    character.id = uuid()
    this.characters.push(character)
  }

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id)
  }

  constructor() { }
}
