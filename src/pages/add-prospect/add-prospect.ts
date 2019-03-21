import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';


/**
 * Generated class for the AddProspectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-prospect',
  templateUrl: 'add-prospect.html',
})
export class AddProspectPage {

  constructor(public navCtrl: NavController, public translateService: TranslateService, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProspectPage');
  }

}
