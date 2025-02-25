import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // @Output()
  // public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = []

  // public emitCharacterIndex(index: number): void {
  //   this.onDeleteCharacter.emit(index);
  // }

  public emitCharacterId(id?: string): void {
    if (!id) return;
    this.onDeleteCharacter.emit(id);
  }
}
