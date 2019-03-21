import { Component,  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment' ;

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'agendaPage'
})
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  viewTitle:string;
  eventSource = [];
  selectedDay = new Date();
  lockSwipeToPrev:Boolean;
  calendar ={
    mode: "month",
    currentDate: this.selectedDay
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  onEventSelected(e){
 let start = moment(e.startTime).format('LLLL');
 let end = moment(e.endTime).format('LLLL');
 let alert = this.alertCtrl.create({
   title: '' + e.title,
   subTitle: 'From:' + start + ' To: ' + end,
   buttons: ['OK']

 })
  }
onViewTitleChanged(title){
 this.viewTitle = title
}

addEvent(){
  let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
  modal.present();

  modal.onDidDismiss(data => {
    if (data){
      let eventData = data;
      eventData.startTime = new Date(data.startTime);
      eventData.endTime = new Date(data.endTime);

      let events =  this.eventSource;
      events.push(eventData);
      this.eventSource = [];
      setTimeout( () => {
        this.eventSource = events
      })

    }
  })

}

onTimeSelected(event){
this.selectedDay = event.selectedTime
}
  onCurrentDateChanged(event:Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);

    if (this.calendar.mode === 'month') {
        if (event.getFullYear() < today.getFullYear() || (event.getFullYear() === today.getFullYear() && event.getMonth() <= today.getMonth())) {
            this.lockSwipeToPrev = true;
        } else {
            this.lockSwipeToPrev = false;
        }
    }
}

}
