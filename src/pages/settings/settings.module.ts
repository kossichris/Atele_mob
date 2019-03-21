import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';


import { SettingsPage } from './settings';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsPage),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    }),
    TranslateModule.forChild()
  ],
  exports: [
    SettingsPage
  ]
})
export class SettingsPageModule { }
