import { Component, OnInit } from '@angular/core';
import {ComplainDetailModel} from './complain-detail.model';
import {complainDetails} from '../../stubs/complainDetails.stubs';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.less']
})
export class ComplaintComponent implements OnInit {

  public complainForBugs: string;
  public complainForData: string;
  public complainForUI: string;
  public feature: string;
  public url: string;
  public complainDetails: ComplainDetailModel[];

  public images = {
    progress: 'assets/progress.png',
    success: 'assets/tick.png',
    notPicked: 'assets/cross.png'
  };

  constructor() { }

  ngOnInit(): void {
    this.complainDetails = complainDetails;
  }

}
