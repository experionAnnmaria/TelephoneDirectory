import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import { ContactService} from '../contact.service';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'td-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  editIndex: number;
  editObject:Contact;

  firstName: String;
  middleName: String;
  lastName: String;
  phoneNumber: Number;
  Address: String;

  //Fetch details from the corresponding array index
  constructor(route: ActivatedRoute, private serviceObject : ContactService) {
  this.editIndex = route.snapshot.params['id'];
  this.editObject = serviceObject.getContactDetail(this.editIndex);
  }

//Update Directory
  onSubmit(form:NgForm){
    this.firstName = form.value.fName;
    this.middleName = form.value.mName;
    this.lastName = form.value.lName;
    this.phoneNumber = form.value.phNumber;
    this.serviceObject.ContactEditPush(new Contact(this.firstName, this.middleName, this.lastName, this.phoneNumber, this.Address),this.editIndex);
  }

  ngOnInit() {
  }


}