import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { AddProspectPage } from './add-prospect';

@NgModule({
  declarations: [
    AddProspectPage,
  ],
  imports: [
    IonicPageModule.forChild(AddProspectPage),
    TranslateModule.forChild()

  ],
})
export class AddProspectPageModule {}
