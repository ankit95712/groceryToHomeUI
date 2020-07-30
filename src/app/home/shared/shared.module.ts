import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCardsComponent } from './basic-cards/basic-cards.component';



@NgModule({
  declarations: [BasicCardsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BasicCardsComponent
  ]
})
export class SharedModule { }
