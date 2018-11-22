import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItem: any = [];
  currentItems: Item[];
  public person: {name: string, company: string, birthdate?: number};
  dob: any;
  age: any;
  showProfile: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) {
    this.person = {name: undefined, company: undefined, birthdate: undefined};
    this.dob = undefined;
  this.currentItems = this.items.query();
   }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItem = [];
      return;
    }
    this.currentItem = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

   /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    let person = JSON.parse(localStorage.getItem('PERSON'));
    if (person){
      this.person = person;
    //  this.age = this.getAge(this.person.birthdate);
      this.dob = new Date(this.person.birthdate).toISOString();
  }
  }
}
