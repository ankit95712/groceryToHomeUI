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
          {label: 'Fruits and Vegetables'},
          {label: 'Foodgrains, Oil & Masala'},
          {label: 'Bakery, Cakes & Dairy'},
          {label: 'Beverages'},
          {label: 'Snacks & Branded Foods'},
          {label: 'Beverages'},
          {label: 'Beauty & Hygiene'},
          {label: 'Cleaning & Household'},
          {label: 'Kitchen, Garden & Pets'},
          {label: 'Eggs, Meat & Fish'},
          {label: 'Gourmet & World Food'},
          {label: 'Baby Care'},

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
          {label: 'Change Password', icon: 'fa fa-user', url: 'home/createPassword'},
        ]
      }
    ];
  }
}

