import { Component, Input } from '@angular/core';
import { Status } from '../../models/status';

/**
 * Generated class for the StatusListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'status-list',
  templateUrl: 'status-list.html'
})
export class StatusListComponent {

  @Input() statusList: Status[];

  constructor() {
    console.log('Hello StatusListComponent Component');
  }

}
