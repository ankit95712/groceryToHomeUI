import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

     items: MenuItem[];
     ngOnInit() {

       this.items = [
                 {
                     label: 'Home',
                     items: [{
                             label: 'New',
                             icon: 'pi pi-fw pi-plus',
                             items: [
                                 {label: 'Project'},
                                 {label: 'Other'},
                             ]
                         },
                         {label: 'Open'},
                         {label: 'Quit'}
                     ]
                 },
                 {
                     label: 'About Us',
                     icon: 'pi pi-fw pi-pencil',
                     items: [
                         {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                         {label: 'Refresh', icon: 'pi pi-fw pi-refresh'},
                     ]
                 },
                 {
                     label: 'Products',
                                      icon: 'pi pi-fw pi-list',
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
                     label: 'Feedback',
                                       icon: 'pi pi-fw pi-list',
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
                                                             icon: 'pi pi-fw pi-list',
                                                             items: [
                                                             {label: 'Vegetables', icon: 'pi pi-fw pi-trash'},
                                                             {label: 'Snacks', icon: 'pi pi-fw pi-refresh'},
                                                             {label: 'Gourmet', icon: 'pi pi-fw pi-trash'},
                                                             {label: 'Dairy', icon: 'pi pi-fw pi-refresh'},
                                                             {label: 'Fruits', icon: 'pi pi-fw pi-refresh'},
                                                             {label: 'Beverages', icon: 'pi pi-fw pi-refresh'},
                                                             {label: 'Branded items', icon: 'pi pi-fw pi-refresh'}
                                                                 ,
                                                                  ]
                  }
]
}
}

