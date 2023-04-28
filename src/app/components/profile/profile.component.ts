import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private router:Router, private service:GlobalService){}

  currentUserId:any
  currentUsername:any
  currentUserData:any
  firstName:any
  lastName:any
  email:any
  contact:any
  address:any
  username:any
  name:any

  ngOnInit() {
    (() => {
      this.currentUserId = sessionStorage.length > 0 ? sessionStorage.getItem('userid') : localStorage.getItem('userid');
    })();

    this.service.getSingleRecord("Users", this.currentUserId).subscribe((result) =>
    {
      this.currentUserData = result
      console.log(this.currentUserData);
      this.username = this.currentUserData.username;
      this.firstName = this.currentUserData.firstName;
      this.lastName = this.currentUserData.lastName;
      this.email = this.currentUserData.email;
      this.contact = this.currentUserData.contact;
      this.address = this.currentUserData.address;
      this.name = `${this.firstName} ${this.lastName}`
    })

  }
}
