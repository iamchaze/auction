import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';
import { priceRegex } from 'src/app/shared/common data/constants';
@Component({
  selector: 'app-bid-products',
  templateUrl: './bid-products.component.html',
  styleUrls: ['./bid-products.component.css']
})
export class BidProductsComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute, private service: GlobalService){
  }
  currentUserData:any
  price = priceRegex
  currentId:any
  allProducts:any = []
  currentRecord:any = []
  imagePath:any
  productName:any
  productDescription:any
  productCategory:any
  productPrice:any
  auctionWindow:any
  highestBidderId:any
  highestBid:any
  date:string = "2023/05/03"
  highestBidderData:any
  highestBidderName:any
  bidWinner:any = "Bidding is in progress..."
  currentHighestBidder:any
  ngOnInit(){
    setInterval(() => {
      this.auctionWindow = new Date(this.date)
    }, 1000);

    this.currentId = this.activatedRoute.snapshot.paramMap.get("id");
    this.service.getSingleRecord("Users", this.currentId).subscribe((result) => {this.currentUserData = result})
    this.service.getRecords("Products").subscribe((result) =>{
      this.allProducts = result
      this.currentRecord = this.allProducts.filter((product:any) => product["id"] == this.currentId)
      this.currentRecord = this.currentRecord[0]
      this.imagePath = this.currentRecord.productImage
      this.productName = this.currentRecord.productName
      this.productDescription = this.currentRecord.productDescription
      this.productCategory = this.currentRecord.productCategory
      this.productPrice = this.currentRecord.productPrice
      this.service.getSingleRecord("Users", this.currentRecord.HighestBidderId).subscribe((result) => { this.highestBidderData = result
        this.highestBidderName = `${this.highestBidderData.firstName} ${this.highestBidderData.lastName}`
      })
    })



  }
  bidPriceData(value:any){
    const currentBid = parseInt(value.price)
    if(sessionStorage.length > 0){
      this.currentHighestBidder = sessionStorage.getItem("userid")
    } else {
      this.currentHighestBidder = localStorage.getItem("userid")
    }
    this.currentHighestBidder = parseInt(this.currentHighestBidder)
    console.log(this.currentHighestBidder);
    if(currentBid > this.productPrice){
      this.currentRecord.productPrice = currentBid
      this.currentRecord.HighestBidderId = this.currentHighestBidder
      this.service.editRecord("Products", this.currentRecord).subscribe((result) => {})
      alert("Bid Submitted")
    } else {
      alert('Enter Bid Value Higher than Current Bid')
    }
  }
}
