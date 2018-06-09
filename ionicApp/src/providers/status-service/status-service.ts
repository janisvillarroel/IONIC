import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Status } from '../../models/status';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the StatusServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StatusServiceProvider {
  
  statuses: AngularFireList<Status>;

  constructor(public http: HttpClient, 
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
      this.statuses = db.list('/statuses/'+afAuth.auth.currentUser.uid);
  }

  addStatus(status: Status){
    return this.statuses.push(status);
  }

  getStatuses(): Observable<Status[]>{
    return this.statuses.valueChanges();
  }
}
