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
  flag:any
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
          if(this.savedProducts.length){
            this.flag = true
          } else {
            this.flag = false
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
    this.service.editRecord("Products",this.productObj).subscribe((result) => {
      alert("Product Unsaved");
    })
   })
   this.service.getSingleRecord("Users", this.currentUserId).subscribe((result) => {
    this.userObj = result
    const index = this.userObj.savedProductsIdList.indexOf(id)
    this.userObj.savedProductsIdList.splice(index, 1)
    this.service.editRecord("Users",this.userObj).subscribe((result) => {

    })

   })
   this.router.navigate(['saved-products'])
  }
}
