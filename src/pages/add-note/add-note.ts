import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';


/**
 * Generated class for the AddNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotePage');
  }

}
