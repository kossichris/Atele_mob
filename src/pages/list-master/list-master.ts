import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';
import { RapportsPage } from '../rapports/rapports';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  public person: {name: string, company: string, birthdate?: number};
  dob: any;
  age: any;
  showProfile: boolean;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController,
     public navParams: NavParams) {
    this.person = {name: undefined, company: undefined, birthdate: undefined};
      this.dob = undefined;
    this.currentItems = this.items.query();

  }

  listRapports() {
    this.navCtrl.push('rapportsPage');
  }

 /* listNotePage() {
    this.navCtrl.push('planningsPage');

  }*/


  addclient() {
    this.navCtrl.setRoot('AddClientPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }


  listPlanningPage() {
    this.navCtrl.push('planningsPage');


  }

  agenda() {
    this.navCtrl.push('agendaPage');


  }



  AddRapportPage() {
    this.navCtrl.setRoot('AddRapportPage', {}, {
      animate: true,
      direction: 'forward'
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

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  /*addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  /*deleteItem(item) {
    this.items.delete(item);
  }*/

  /**
   * Navigate to the detail page for this item.
   */
  /*openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }*/



  // Profile code







  }
/*
  reset(){
    this.person = {name: null, company: null, birthdate: null};
    this.dob = null;
    this.showProfile = false;
  }

  save(){
    this.person.birthdate = new Date(this.dob).getTime();
    this.age = this.getAge(this.person.birthdate);
    this.showProfile = true;
    localStorage.setItem('PERSON', JSON.stringify(this.person));
  }

  getAge(birthdate){
    let currentTime = new Date().getTime();
     return ((currentTime - birthdate)/31556952000).toFixed(0);
  }*/

}
