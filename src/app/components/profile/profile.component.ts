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

  currentUsername:any
  usersData:any
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
      this.currentUsername = sessionStorage.length > 0 ? sessionStorage.getItem('username') : localStorage.getItem('username');
    })();

    this.service.getRecords('Users').subscribe(result =>
      {
        this.usersData = result
        this.currentUserData = this.usersData.filter((user:any) =>{
          return user.username == this.currentUsername
        })
        this.username = this.currentUserData[0].username
        this.firstName = this.currentUserData[0].firstName
        this.lastName = this.currentUserData[0].lastName
        this.email = this.currentUserData[0].email
        this.contact = this.currentUserData[0].contact
        this.address = this.currentUserData[0].address
        this.name = `${this.firstName} ${this.lastName}`
      })

  }
}
