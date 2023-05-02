import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent implements OnInit {
  constructor(private router: Router, private service: GlobalService) {}
  categories: any = ['All'];
  selectedCategory: any;
  allProducts: any;
  category: any;
  tempObj:any
  tempProductsObj:any
  tempUsersObj:any
  term:any
  currentUserId:any

  ngOnInit() {
    this.service.getRecords('Products').subscribe((result) => {
      this.allProducts = result;

      //Get the list of categories from JSON
      for (let i = 0; i < this.allProducts.length; i++) {
        this.categories.push(this.allProducts[i].productCategory);
      }
      this.categories = Array.from(new Set(this.categories));

    });
  }

  categorize(category:any) {
    if(category == "All"){
      this.service.getRecords('Products').subscribe((result) => {
        this.allProducts = result
      })
    } else {
      this.service.getRecords('Products').subscribe((result) => {
        this.tempObj = result

        this.allProducts = this.tempObj.filter((product:any) => {
          return product.productCategory == category
        })
      })
    }
  }

  setPath(id: any) {
    this.router.navigate(['bid-products', id]);
  }

  saveProduct(id: any) {

    //Get the current logged in user data from browser storage
    if(sessionStorage.length > 0){
      this.currentUserId = sessionStorage.getItem('userid')
    } else {
      this.currentUserId = localStorage.getItem('userid')
    }

    // Get single record from users DB for current logged-in user

    this.service.getSingleRecord("Users", this.currentUserId).subscribe((result) => {
      this.tempUsersObj = result
      //Push the id of the saved product in the savedProductsIdList array
      this.tempUsersObj.savedProductsIdList.push(id)
      //Make array values distintive(Non repetitive)
      this.tempUsersObj.savedProductsIdList = Array.from(new Set(this.tempUsersObj.savedProductsIdList));
      //edit the record in the DB
      this.service.editRecord("Users",this.tempUsersObj).subscribe((result) => {
        alert("Product Saved")
      })

      //Get Specific record from DB using parameter Id
      this.service.getSingleRecord("Products", id).subscribe((result) => {
        this.tempProductsObj = result
        //Change isSaved value to true in temp obj
        this.tempProductsObj.isSaved = true
        //Update the record in db
        this.service.editRecord("Products", this.tempProductsObj).subscribe((result) => {

        })
      })

    })



  }
}
