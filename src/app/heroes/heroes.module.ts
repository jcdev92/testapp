import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeroeComponent,
    ListComponent
  ],
  exports: [
    HeroeComponent,
    ListComponent
  ]
})
export class HeroesModule {
}
