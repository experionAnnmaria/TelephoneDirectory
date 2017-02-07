import { Injectable } from '@angular/core';
import {Contact} from './contact';

@Injectable()
export class ContactService {
  contactArray : Contact[]=[];
  searchArray : Contact[]=[];
  flag: number =0;
  
  constructor() {}

  //Push contact details into array
  pushContact(contact: Contact){
    this.contactArray.push(contact);
  }

  //pull contact Detail from array to display it in the list area
  pullContact(){
    return this.contactArray;
  }

  //Get contact Detail to have a detailed view
  getContactDetail(i:number){   
    return this.contactArray[i];
  }

//Search in directory
  searchContact(key:string){
   // alert(key);
    for (let oo of this.contactArray) {
      if ((oo.phonenumber.search(key)) >= 0) {
        this.flag = 1;
        alert("k");
        this.searchArray.push(oo);
      }
    }
  }

  //Push Contact to editable field
    ContactEditPush(objectContact: Contact,indexedit:number) { 
    this.contactArray.splice(indexedit,1,objectContact);
    }

//chech redundancy in phone number
     onChangeValidate(ph:number){
       for (let oo of this.contactArray) {
         if ((oo.phonenumber.search(ph)) >= 0){
           return true;
         }
       }
    console.log(ph);
    }
    
}

