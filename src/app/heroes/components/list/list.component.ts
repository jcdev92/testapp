import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public title: string = 'List of Heroes';
  public defaultNames: string[] = ['Batman', 'Superman', 'Ironman', 'Hulk', 'Thor'];
  public heroesNameList: string[] = [...this.defaultNames];
  public deletedHeroe?: string;

  removeLastHeroe():void {
    this.deletedHeroe = this.heroesNameList.pop();
  }

  resetList():void {
    this.heroesNameList = [...this.defaultNames];
    this.deletedHeroe = undefined;
  }
}
