import { ContactServiceProvider } from './../../providers/contact-service/contact-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contact } from '../../models/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: String;
  contacts: Contact[];

  constructor(public navCtrl: NavController, 
    public contactService: ContactServiceProvider ) {
  }



}
