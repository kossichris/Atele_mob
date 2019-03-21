import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlanningsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'planningsPage'
})
@Component({
  selector: 'page-plannings',
  templateUrl: 'plannings.html',
})
export class PlanningsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  addPlanning() {
    this.navCtrl.setRoot('AddPlanningPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanningsPage');
  }

}
