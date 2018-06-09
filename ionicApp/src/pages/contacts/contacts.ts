import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Contact } from '../../models/contact';
import { ContactServiceProvider } from '../../providers/contact-service/contact-service';
import { isArray } from 'ionic-angular/util/util';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  searchQuery: String;
  //contacts: Observable<{}[]>;
  contacts: Contact[];



  constructor(public navCtrl: NavController, 
    public contactService: ContactServiceProvider, 
    public alertCtrl: AlertController ) {

    let suscriptor =contactService.getContacts().subscribe(data => {
       this.contacts = data;
    });


    /*contactService.getContacts().subscribe(data => {
      console.log(data);
      if(isArray(data)){
          data.forEach(contact => {
            console.log(contact);
            this.contacts.push({name: contact.name})
          });
        }
      }
    );*/

    //this.contacts = contactService.getContacts();
  }

  addContact(){
    let prompt = this.alertCtrl.create({
      title: 'Contacto',
      message: "Contacto",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.contactService.addContact(data);

  
          }
        }
      ]
    });
    prompt.present();
  }
  
  /*updateContacts(){
    console.log(this.searchQuery);
    this.contacts = this.contactService.filterContacts(this.searchQuery);
  }*/



}
