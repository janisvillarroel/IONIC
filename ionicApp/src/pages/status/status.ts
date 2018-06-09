import { StatusServiceProvider } from './../../providers/status-service/status-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Status } from '../../models/status';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  public statusList: Status[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public statusService: StatusServiceProvider) {
      statusService.getStatuses()
      .subscribe(data => {
        this.statusList = data;
      });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

  goToNewStatus(){
    this.navCtrl.push('NewStatusPage');
  }
}
