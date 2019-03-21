import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { AddClientPage } from './add-client';

@NgModule({
  declarations: [
    AddClientPage,
  ],
  imports: [
    IonicPageModule.forChild(AddClientPage),
    TranslateModule.forChild()


  ],
})
export class AddClientPageModule {}
