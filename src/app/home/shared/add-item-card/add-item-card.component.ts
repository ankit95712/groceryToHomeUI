import { Component, OnInit } from '@angular/core';
import {basicCardData} from '../../stubs/basicCard.stubs';
@Component({
  selector: 'app-add-item-card',
  templateUrl: './add-item-card.component.html',
  styleUrls: ['./add-item-card.component.css']
})
export class AddItemCardComponent implements OnInit {
display = false;
basicCardDetails = basicCardData[0];
  constructor() { }

  ngOnInit(): void {
  }
  closeForm(): void {
}
}
