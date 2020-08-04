import {Component, Input, OnInit} from '@angular/core';
import {BasicCardModel} from './basic-card.model';

@Component({
  selector: 'app-basic-cards',
  templateUrl: './basic-cards.component.html',
  styleUrls: ['./basic-cards.component.less']
})
export class BasicCardsComponent implements OnInit {
  display = false;

  @Input() basicCardDetails: BasicCardModel;
  @Input() backGround: string;

  constructor() { }

  ngOnInit(): void {
  }

  closeForm() {
    this.display = false;
  }

}
