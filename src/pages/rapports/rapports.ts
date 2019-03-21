import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RapportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'rapportsPage'
}
)
@Component({
  selector: 'page-rapports',
  templateUrl: 'rapports.html',
})
export class RapportsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  addcRapport() {
    this.navCtrl.setRoot('AddRapportPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RapportsPage');
  }

}
