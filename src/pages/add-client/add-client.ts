import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the AddClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-client',
  templateUrl: 'add-client.html',
})
export class AddClientPage {
  // Our translated text strings
  private loginErrorString: string;


  myDate = 'YOUR_DATE';/* (assign your selected date to this Object)*/
 disabledDates: Date[] = [
      new Date(1545911005644),
      new Date(),
      new Date(2018, 12, 12), // Months are 0-based, this is August, 10th.
      new Date('Wednesday, December 26, 2018'), // Works with any valid Date formats like long format
      new Date('12-14-2018'), // Short format
];
datePickerObj: any = {
  inputDate: new Date('2018-08-10'), // default new Date()
  fromDate: new Date('2018-12-08'), // default null
  toDate: new Date('2018-12-28'), // default null
  showTodayButton: false, // default true
  closeOnSelect: true, // default false
  disableWeekDays: [4], // default []
  mondayFirst: true, // default false
  setLabel: 'S',  // default 'Set'
  todayLabel: 'T', // default 'Today'
  closeLabel: 'C', // default 'Close'
  disabledDates: this.disabledDates, // default []
  titleLabel: 'Select a Date', // default null
  monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
  weeksList: ["S", "M", "T", "W", "T", "F", "S"],
  dateFormat: 'yyyy-MM-dd', // default dd MMM yyyy
  clearButton : false , // default true
  momentLocale: 'pt-BR', // Default en-US'
  yearInAscending: true, // Default false
  btnCloseSetInReverse: true, // Default false
  btnProperties: {
    expand: 'block', // Default 'block'
    fill: '', // Default 'solid'
    size: '', // Default 'default'
    disabled: '', // Default false
    strong: '', // Default false
    color: '' // Default ''
  }
};

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddClientPage');
  }

}
