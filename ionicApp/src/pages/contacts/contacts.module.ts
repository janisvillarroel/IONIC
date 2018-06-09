import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsPage } from './contacts';
import { ContactListComponent } from '../../components/contact-list/contact-list';

@NgModule({
  declarations: [
    ContactsPage,
    ContactListComponent
  ],
  imports: [
    IonicPageModule.forChild(ContactsPage),
  ],
})
export class ContactsPageModule {}
