import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { AddPlanningPage } from './add-planning';

@NgModule({
  declarations: [
    AddPlanningPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlanningPage),
    TranslateModule.forChild()

  ],
})
export class AddPlanningPageModule {}
