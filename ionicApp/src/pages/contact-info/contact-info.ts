import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../models/contact';

/**
 * Generated class for the ContactInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-info',
  templateUrl: 'contact-info.html',
})
export class ContactInfoPage {

  item: Contact;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('contact');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactInfoPage');
  }

}
