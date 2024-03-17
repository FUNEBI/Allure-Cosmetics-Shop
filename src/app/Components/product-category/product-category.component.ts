import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/Services/movies.service';
import {Router } from '@angular/router';
import { CartServiceService } from 'src/app/Services/cartService/cart-service.service';
import { UtilityService } from 'src/app/Services/alertService/utiltiesService';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit{
  productCategory: any;
  productList: any;
  items=[]

  constructor(
    private CartService:CartServiceService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private AlertService:UtilityService,
    private  MoviesService: MoviesService
  ){}

  ngOnInit(): void {
    const category = 'category';
    if (this.activeRoute.snapshot.params[category])
    {
      this.productCategory = this.activeRoute.snapshot.params[category];
    }

    this.getProductCategory(this.productCategory)
    console.log(this.productCategory)
  }


  getProductCategory(category:any){
    this.AlertService.ShowSpinner()
    this.MoviesService.getProductCategory(category).subscribe((data:any)=>{   
      this.productList = data
      this.AlertService.HideSpinner()
      },(Error:any) => {
        console.log(Error.statusText)
        this.AlertService.HideSpinner()
        this.AlertService.alertError(Error.statusText + " You have been redirected back to the home page. Please check your internet connection and try again.")
        this.AlertService.ShowSpinner()
        this.AlertService.HideSpinner()
        this.router.navigate(['/']);
    })
  }

  addToCart(item) {
    if (!this.CartService.itemInCart(item)) {
      this.CartService.addToCart(item); //add items in cart
      this.items = [...this.CartService.getItems()];
    }   
  }
}
