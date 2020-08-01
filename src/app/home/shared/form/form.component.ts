import {Component, Input, OnInit} from '@angular/core';
import {BasicCardModel} from "../basic-cards/basic-card.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() details: BasicCardModel;

  constructor() { }

  ngOnInit(): void {
  }

}
