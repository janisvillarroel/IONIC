import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../models/contact';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @Input() contact: Contact;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contact = navParams.get('contact');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
