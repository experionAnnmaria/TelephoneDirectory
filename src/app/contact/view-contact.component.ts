import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import { ContactService} from '../contact.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'td-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  indexvalue:number;
  viewObject:Contact;
   constructor(route: ActivatedRoute,private contactrserv: ContactService) { 
    this.indexvalue = route.snapshot.params['id'];
    this.viewObject=contactrserv.getContactDetail(this.indexvalue);
}

  ngOnInit() {
  }

}
