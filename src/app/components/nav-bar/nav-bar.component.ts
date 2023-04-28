import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  constructor(private router:Router, private service: GlobalService){}
  currentUser:any
  username:any
  userData:any
  allUsers:any
  ngOnInit(): void {

    if(sessionStorage.length > 0){
      this.currentUser = sessionStorage.getItem('username')
    } else {
      this.currentUser = localStorage.getItem('username')
    }
    this.service.getRecords("Users").subscribe((result) =>{
      this.allUsers = result
      this.userData = this.allUsers.filter( (user:any) => {
        return user.username == this.currentUser
      })
      this.username = this.userData[0].username.toUpperCase()
    })
  }


  goToViewProducts(){
    this.router.navigate(['/view-products'])
  }
  goToSavedProducts(){
    this.router.navigate(['/saved-products'])
  }
  goToProfile(){
    this.router.navigate(['/profile'])
  }
  logout(){
    let d = "new"
    this.service.logout(d)
  }


}
