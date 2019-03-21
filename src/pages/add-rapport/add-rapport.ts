import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';


/**
 * Generated class for the AddRapportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-rapport',
  templateUrl: 'add-rapport.html',
})
export class AddRapportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRapportPage');
  }

}
