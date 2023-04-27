import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-bid-products',
  templateUrl: './bid-products.component.html',
  styleUrls: ['./bid-products.component.css']
})
export class BidProductsComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute, private service: GlobalService){}
  currentId:any
  recordsObj:any = []
  currentRecord:any = []
  imagePath:any
  productName:any
  productDescription:any
  productCategory:any
  productPrice:any

  ngOnInit(){
    this.currentId = this.activatedRoute.snapshot.paramMap.get("id");
    this.service.getRecords("Products").subscribe((result) =>{
      this.recordsObj = result
      console.log("records obj",this.recordsObj[0].id);
      this.currentRecord = this.recordsObj.filter((product:any) => product["id"] == this.currentId)
      console.log(this.currentRecord);
      this.imagePath = this.currentRecord[0]['productImage']
      this.productName = this.currentRecord[0]['productName']
      this.productDescription = this.currentRecord[0]['productDescription']
      this.productCategory = this.currentRecord[0]['productCategory']
      this.productPrice = this.currentRecord[0]['productPrice']
      console.log(this.productPrice);
    })
  }
}
