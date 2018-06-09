import { StatusPageModule } from './../status/status.module';
import { StatusServiceProvider } from './../../providers/status-service/status-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Status } from '../../models/status';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera';

/**
 * Generated class for the NewStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-status',
  templateUrl: 'new-status.html',
})
export class NewStatusPage {
  public status: Status = new Status();

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public statusProvider: StatusServiceProvider,
    public camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewStatusPage');
  }



  uploadStatus(){
    this.statusProvider.addStatus(this.status);
    //todo en caso de erro
    this.navCtrl.pop();
    //this.navCtrl.push(StatusPage);
  }

  takePicture(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.status.image  = 'data:image/jpeg;base64,' + imageData;
      console.log();
     }, (err) => {
      // Handle error
     });
  }

}
