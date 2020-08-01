import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        items: [
          {label: 'Landing Page', icon: 'pi pi-home', url: 'home/landingPage'}
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
          {label: 'Home Delivery', icon: ''},
          {label: 'Pre Packing', icon: ''},
          {label: 'Cashless payment', icon: 'fa fa-credit-card'},
        ]
      },
      {
        label: 'About Us',
        icon: 'fa fa-info-circle',
        items: [
          {label: 'About', icon: 'fa fa-user', url: 'home/aboutUs'},
          {label: 'Contact', icon: 'fa fa-address-card-o', url: 'home/contact'},
          {label: 'Complains', icon: 'fa fa-bug', url: 'home/complaint'},
          {label: 'Suggestions', icon: 'fa fa-question', url: 'home/suggestions'},
          {label: 'Feedback', icon: 'fa fa-comments', url: 'home/feedback'},
        ]
      },
      {
        label: 'Profile',
        icon: 'fa fa-user',
        items: [
          {label: 'Change Password', icon: 'fa fa-user', url: '/createPassword'},
        ]
      }
    ];
  }
}

