import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
