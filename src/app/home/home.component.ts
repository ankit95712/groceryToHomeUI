import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {BasicCardModel} from "./shared/basic-cards/basic-card.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  items: MenuItem[];
  products: BasicCardModel[];

  constructor() {
  }

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
          {label: 'About', icon: 'fa fa-user'},
          {label: 'Contact', icon: 'fa fa-address-card-o'},
          {label: 'Complains', icon: 'fa fa-bug'},
          {label: 'Suggestions', icon: 'fa fa-question'},
          {label: 'Feedback', icon: 'fa fa-comments'},
        ]
      }
    ];

    this.products = [
      {
        header: 'Orange',
        imageUrl: 'assets/download.jpg',
        quantity: 2,
        metrics: 'kg',
        marketPrice: 30,
        price: 20
      },
      {
        header: 'Banana',
        imageUrl: 'assets/banana.jpg',
        quantity: 12,
        metrics: 'dozen',
        marketPrice: 30,
        price: 20
      },
      {
        header: 'Grapes',
        imageUrl: 'assets/grapes.jpg',
        quantity: 5,
        metrics: 'kg',
        marketPrice: 30,
        price: 20
      },
      {
        header: 'Kiwi',
        imageUrl: 'assets/kiwi.jpg',
        quantity: 3,
        metrics: 'kg',
        marketPrice: 30,
        price: 20
      },
      {
        header: 'Apple',
        imageUrl: 'assets/apple.jpg',
        quantity: 10,
        metrics: 'kg',
        marketPrice: 30,
        price: 20
      },
    ]
  }
}

