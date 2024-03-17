import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  items = [];
  count=0;
  simpleObservable = new Subject();
  simpleObservable$ = this.simpleObservable.asObservable();
  
  constructor() { }
  addToCart(item:any) {
    this.items.push(item);
    this.addCount()
    console.log(item);
    // this.getCount()
    // -----check if there are items already added in cart
      let existingItems = [];
    if ( localStorage.getItem('cart_items')){//----- update by adding new items
      existingItems = JSON.parse(localStorage.getItem('cart_items'));
      existingItems = [item, ...existingItems];
      console.log( 'Items exists');
      
    } 
    //-----if no items, add new items
     else{ 
      console.log( 'NO items exists');
      existingItems = [item]
    } 

      this.saveCart();
  }

  getItems() {
    return this.items;
  } 

  loadCart(): void {
    this.items = JSON.parse(localStorage.getItem("cart_items")) ?? [];
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items)); 
  }

  clearCart(items) {
    this.items = [];

    localStorage.removeItem("cart_items")
  }

  removeItem(item) {
    const index = this.items.findIndex(o => o.id === item.id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.removeCount()
      this.saveCart();
    }
  }

  itemInCart(item): boolean {
    return this.items.findIndex(o => o.id === item.id) > -1;
  }

  addCount() {
    this.count = this.items.length
    this.simpleObservable.next(this.count)
    console.log(this.count)
  }
  removeCount() {
    if (this.count > 0) { this.count-=1 };
    this.simpleObservable.next(this.count)
  }
  getCount(){
    return this.simpleObservable$;
  }

  
}
