import {Component,ElementRef,EventEmitter,Input,OnInit,Output,QueryList,VERSION,ViewChildren,} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from 'src/app/Services/alertService/utiltiesService';
import { CartServiceService } from 'src/app/Services/cartService/cart-service.service';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{


  @ViewChildren('subTotalWrap') subTotalItems: QueryList<ElementRef>;
  @ViewChildren('subTotalWrap_existing')
  subTotalItems_existing: QueryList<ElementRef>;

  quantity:number = 1
  items = [];
  itemsInCart:any;
  total:number = 0
  counter:number = 1
  totalItemsIncart: any;
  totalQuantity: any;
  unsubscribe: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private AlertService:UtilityService,
    private MoviesService:  MoviesService,
    private CartService:CartServiceService,
    private currencyPipe: CurrencyPipe
  ){}

  ngOnInit():void{
    this.CartService.loadCart()
    this.items = [...this.CartService.getItems()];
    this.itemsInCart = this.items.length
    console.log(this.items.length)
    this.totalPrice()

  }


  changeSubtotal(item, index) {
    const qty = this.quantity;
    const amt = item.price;
    this.counter = amt * qty;
    this.CartService.saveCart();
  }

  

  removeFromCart(item) {
    this.CartService.removeItem(item);
    this.items = this.CartService.getItems();
    this.CartService.removeCount()
    this.ngOnInit()
  }

  clearCart(items) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.CartService.clearCart(items);
    this.items = [...this.CartService.getItems()];
    this.CartService.removeCount()
    this.ngOnInit()
  }

  addToCart(item) {
    if (!this.CartService.itemInCart(item)) {
      this.totalQuantity += 1
      this.CartService.addToCart(item); //add items in cart
      this.items = [...this.CartService.getItems()];
    }
  }


  totalPrice() {
    this.total = this.items.reduce((total, amount) =>{ 
      return total + parseFloat(amount.price)
    }, 0)
     console.log(this.total)
  }

  checkOut(e:any){
    this.AlertService.alertSuccess("Check Out Successful")
    this.CartService.clearCart(e)
    this.AlertService.reloadComponent()
  }
  
}


