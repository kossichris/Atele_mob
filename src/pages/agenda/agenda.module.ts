import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgCalendarModule } from 'ionic2-calendar';
import { AgendaPage } from './agenda';

@NgModule({
  declarations: [
    AgendaPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaPage),
    NgCalendarModule
  ],
})
export class AgendaPageModule {}
