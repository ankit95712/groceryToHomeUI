import {Component, Input, OnInit} from '@angular/core';
import {BasicCardModel} from "./basic-card.model";

@Component({
  selector: 'app-basic-cards',
  templateUrl: './basic-cards.component.html',
  styleUrls: ['./basic-cards.component.less']
})
export class BasicCardsComponent implements OnInit {

  @Input() basicCardDetails: BasicCardModel;

  constructor() { }

  ngOnInit(): void {
  }

}
