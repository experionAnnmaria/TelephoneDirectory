import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import { ContactService} from '../contact.service'
import { NgForm } from '@angular/forms'
import { Router} from '@angular/router'

@Component({
  selector: 'td-contactadd',
  templateUrl: './contactadd.component.html',
  styleUrls: ['./contactadd.component.css']
})
export class ContactaddComponent {
  firstName: String;
  middleName: String;
  lastName: String="null";
  phoneNumber: Number;
  Address: String;
  flag : boolean = false;

  constructor(private serviceObject : ContactService, private router:Router) {
  }
onChangeValidate(f){
  this.flag=this.serviceObject.onChangeValidate(f);
}
   

  onSubmit(form:NgForm){
    this.firstName = form.value.fName;
    this.middleName = form.value.mName;
    this.lastName = form.value.lName;
    this.phoneNumber = form.value.phNumber;
    this.Address = form.value.address;
    this.serviceObject.pushContact(new Contact(this.firstName, this.middleName, this.lastName, this.phoneNumber, this.Address));
    //redirection
    this.router.navigate(['contactlist']);
  }

}
