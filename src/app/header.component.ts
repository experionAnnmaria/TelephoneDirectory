import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ContactService} from './contact.service'

@Component({
  selector: 'td-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 constructor(private serviceObject : ContactService) {
  }
//Fetch the string from search space

  searchKey :string= "";
  @Output() searchKeyObject = new EventEmitter<String>();
  
  onKey(event:any) { 
    this.searchKey = event.target.value;
    this.searchKeyObject.emit(this.searchKey);

  }
 

  ngOnInit() {
  }

}
