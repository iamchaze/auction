import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router:Router, private service: GlobalService){}

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
