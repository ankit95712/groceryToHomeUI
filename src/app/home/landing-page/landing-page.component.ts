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

  constructor() { }

  ngOnInit(): void {
    this.products = basicCardData;
  }

}
