import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  items: MenuItem[];

  ngOnInit() {

    this.items = [
      {
        label: 'Home',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {label: 'Project', url: 'http://www.primefaces.org/primeng'},
            {label: 'Other', url: 'login'},
          ]
        },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Products',
        icon: 'fa fa-product-hunt',
        items: [
          {label: 'Vegetables', icon: 'pi pi-fw pi-trash'},
          {label: 'Snacks', icon: 'pi pi-fw pi-refresh'},
          {label: 'Gourmet', icon: 'pi pi-fw pi-trash'},
          {label: 'Dairy', icon: 'pi pi-fw pi-refresh'},
          {label: 'Fruits', icon: 'pi pi-fw pi-refresh'},
          {label: 'Beverages', icon: 'pi pi-fw pi-refresh'},
          {label: 'Branded items', icon: 'pi pi-fw pi-refresh'},

        ]
      },
      {
        label: 'Services',
        icon: 'fa fa-cogs',
        items: [
          {label: 'Vegetables', icon: 'pi pi-fw pi-trash'},
          {label: 'Snacks', icon: 'pi pi-fw pi-refresh'},
          {label: 'Gourmet', icon: 'pi pi-fw pi-trash'},
          {label: 'Dairy', icon: 'pi pi-fw pi-refresh'},
          {label: 'Fruits', icon: 'pi pi-fw pi-refresh'},
          {label: 'Beverages', icon: 'pi pi-fw pi-refresh'},
          {label: 'Branded items', icon: 'pi pi-fw pi-refresh'}
        ]
      },
      {
        label: 'About Us',
        icon: 'fa fa-info-circle',
        items: [
          {label: 'About', icon: 'pi pi-fw pi-trash'},
          {label: 'Contact', icon: 'pi pi-fw pi-refresh'},
          {label: 'Complains', icon: 'pi pi-fw pi-refresh'},
          {label: 'Suggestions', icon: 'pi pi-fw pi-refresh'},
          {label: 'Feedback', icon: 'pi pi-fw pi-refresh'},
        ]
      }
    ];
  }
}

