import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { AddRapportPage } from './add-rapport';

@NgModule({
  declarations: [
    AddRapportPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRapportPage),
    TranslateModule.forChild()

  ],
})
export class AddRapportPageModule {}
