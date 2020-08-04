import { Component, OnInit } from '@angular/core';
import {basicCardData} from '../stubs/basicCard.stubs';
import {BasicCardModel} from '../shared/basic-cards/basic-card.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  products: BasicCardModel[];
  empty: BasicCardModel;

  constructor() { }

  ngOnInit(): void {
    this.products = basicCardData;
    this.empty = {
      header: 'Orange',
      imageUrl: 'assets/plus.png',
      quantity: 2,
      metrics: 'kg',
      marketPrice: 30,
      price: 20
    };
  }

}
