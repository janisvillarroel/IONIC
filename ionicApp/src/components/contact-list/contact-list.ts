import { Contact } from './../../models/contact';
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactInfoPage } from '../../pages/contact-info/contact-info';

/**
 * Generated class for the ContactListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contact-list',
  templateUrl: 'contact-list.html'
})
export class ContactListComponent {

  @Input() listContacts: Contact[];

  constructor(public navCtrl: NavController) {
    console.log('Hello ContactListComponent Component');
  }


  goToChat(contact: Contact){
    this.navCtrl.push('ChatPage', {'contact': contact});
    
  }

}
