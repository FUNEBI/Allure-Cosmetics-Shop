import {ChangeDetectorRef, Component,ElementRef,QueryList,VERSION,ViewChildren,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/Services/cartService/cart-service.service';
import { MoviesService } from 'src/app/Services/movies.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productType: any;
  productColours: any;
  productId: any;
  productDetails: any;
  @ViewChildren('subTotalWrap') subTotalItems: QueryList<ElementRef>;
  @ViewChildren('subTotalWrap_existing')
  subTotalItems_existing: QueryList<ElementRef>;
 
  totalQuantity:number = 0
  items = [];
  productData: any;
  quantity: number=1
  counter: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private CartService:CartServiceService,
    private _changeDetectorRef: ChangeDetectorRef,
    private  MoviesService: MoviesService
  ){}

  ngOnInit():void{
    const id = 'id';
    if (this.activeRoute.snapshot.params[id])
    {
      this.productId = this.activeRoute.snapshot.params[id];
    }

    this.getproducts(this.productId)
  }
  getproducts(id:any){
    this.MoviesService.getProductByProductId(id).subscribe((data:any)=>{
      console.log(data)
      this.productDetails = data
      this.counter = data.price
    })
  }

  increment(item){
    
    this.quantity += 1;
    this.counter  = this.quantity * item.price
    console.log(this.quantity * item.price ,this.quantity)
  }
  decrement(item){
    if(this.quantity >1){
      this.quantity -= 1;
      this.counter = this.quantity * item.price
    }
    }

  addToCart(item) {
    if (!this.CartService.itemInCart(item)) {
      this.CartService.addToCart(item); //add items in cart
      this.totalQuantity += 1
      this.items = [...this.CartService.getItems()];
      console.log(this.totalQuantity )
    }
    this._changeDetectorRef.detectChanges();
    
  }

}
