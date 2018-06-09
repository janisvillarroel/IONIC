import { Camera } from '@ionic-native/camera';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactListComponent } from '../components/contact-list/contact-list';
import { ContactServiceProvider } from '../providers/contact-service/contact-service';
import { StatusServiceProvider } from '../providers/status-service/status-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

export const configFirebase = {
  apiKey: "AIzaSyBlYS5RgazMMuOp5IhhVjFu8C2ZNZ8gF4I",
  authDomain: "ionic-chat-77c25.firebaseapp.com",
  databaseURL: "https://ionic-chat-77c25.firebaseio.com",
  projectId: "ionic-chat-77c25",
  storageBucket: "ionic-chat-77c25.appspot.com",
  messagingSenderId: "922431712855"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(configFirebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactServiceProvider,
    StatusServiceProvider,
    HttpClient,
    AngularFireDatabase,
    AngularFireAuth,
    Camera,
    Geolocation,
    GoogleMaps
  ]
})
export class AppModule {}
