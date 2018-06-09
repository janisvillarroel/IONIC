import { Contact } from "./contact";

export class Message {

  text: String;
  date: Date;
  contact: Contact;
  status: String;
  
  constructor(text: String, status: String, date: Date, contact: Contact) {
      this.text = text;
      this.status = status;
      this.date = date;
      this.contact = contact;
  }
  
}