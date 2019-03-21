import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { AddNotePage } from './add-note';

@NgModule({
  declarations: [
    AddNotePage,
  ],
  imports: [
    IonicPageModule.forChild(AddNotePage),
    TranslateModule.forChild()

  ],
})
export class AddNotePageModule {}
