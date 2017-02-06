import { Component, OnInit, Input } from '@angular/core';
import { ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'td-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent{
  listArray : Contact []=[];


  @Input() searchValue : String;

  constructor(private serviceObject : ContactService) {
    this.listArray=this.serviceObject.pullContact();
    
  }
}
