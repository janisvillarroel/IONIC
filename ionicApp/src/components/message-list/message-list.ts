import { Component } from '@angular/core';

/**
 * Generated class for the MessageListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'message-list',
  templateUrl: 'message-list.html'
})
export class MessageListComponent {

  text: string;

  constructor() {
    console.log('Hello MessageListComponent Component');
    this.text = 'Hello World';
  }

}
