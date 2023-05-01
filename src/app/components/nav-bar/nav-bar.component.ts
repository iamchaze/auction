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
  currentUserId:any
  username:any
  userData:any
  allUsers:any
  ngOnInit(): void {

    if(sessionStorage.length > 0){
      this.currentUserId = sessionStorage.getItem('userid')
    } else {
      this.currentUserId = localStorage.getItem('userid')
    }
    this.service.getSingleRecord("Users", this.currentUserId).subscribe((result) => {
      this.userData = result
      this.username = this.userData.username.toUpperCase()
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
