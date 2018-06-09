import { StatusListComponent } from './../../components/status-list/status-list';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatusPage } from './status';
import { NewStatusPage } from '../new-status/new-status';

@NgModule({
  declarations: [
    StatusPage,
    StatusListComponent
  ],
  imports: [
    IonicPageModule.forChild(StatusPage),
  ],
})
export class StatusPageModule {}
