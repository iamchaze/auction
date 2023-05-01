import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-saved-products',
  templateUrl: './saved-products.component.html',
  styleUrls: ['./saved-products.component.css']
})
export class SavedProductsComponent implements OnInit {

constructor(private service: GlobalService, private router:Router, private location:Location){}

  allProducts:any
  savedProducts:any = []
  currentUserId:any
  currentUserData:any
  savedProductsList:any
  productObj:any
  userObj:any

  ngOnInit(): void {
      if(sessionStorage.length > 0){
        this.currentUserId = sessionStorage.getItem('userid')
      } else {
        this.currentUserId = localStorage.getItem('userid')
      }
      this.service.getSingleRecord("Users", this.currentUserId).subscribe((result) => {
        this.currentUserData = result
       this.savedProductsList = this.currentUserData.savedProductsIdList
        this.service.getRecords("Products").subscribe((result) => {
          this.allProducts = result
          for(let  i= 0; i < this.savedProductsList.length; i++){
            for(let j = 0; j < this.allProducts.length; j++){
              if(this.allProducts[j].id == this.savedProductsList[i]){
                this.savedProducts.push(this.allProducts[j])
              }
            }
          }
        })
      })
  }

  setPath(id:any){
    this.router.navigate(['bid-products',id])
  }


  unsave(id:any){
   this.service.getSingleRecord("Products",id).subscribe((result) => {
    this.productObj = result
    this.productObj.isSaved = false
    this.service.editRecord("Products",this.productObj,id).subscribe((result) => {
      alert("Product Unsaved");
    })
   })
   this.service.getSingleRecord("Users", this.currentUserId).subscribe((result) => {
    this.userObj = result
    console.log(this.userObj);
    this.userObj
   })

  }
}
