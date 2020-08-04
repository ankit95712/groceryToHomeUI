import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasicCardModel} from '../basic-cards/basic-card.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() details: BasicCardModel;
  @Output() closeForm: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.closeForm.emit();
  }

}
