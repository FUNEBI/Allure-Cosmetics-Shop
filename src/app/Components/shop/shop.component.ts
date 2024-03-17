import { Component, Input, OnInit,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cartService/cart-service.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router } from '@angular/router';
import { UtilityService } from 'src/app/Services/alertService/utiltiesService';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})

export class ShopComponent implements OnInit{

  productsList:any;
  formGroup!: FormGroup;
  shoppingList: any;
  list: any;
  myList: Array<any>[] = [];
  productsBrand: any;
  loading: boolean =false;
  filteredBrand: any;
  filtered$: any;
  productCategory: any;
  brands: any;
  productColor: any;
  totalQuantity:number = 0
  items = []; 
  colors: boolean;

  constructor(
    private fb:FormBuilder,
    private CartService:CartServiceService,
    private router: Router,
    private _changeDetectorRef: ChangeDetectorRef,
    // private ObjectToArraypipePipe:ObjectToArraypipePipe,
    public MoviesService:MoviesService,
    private AlertService:UtilityService
  ){}

  ngOnInit(): void {
    this.initForm()
    this.getAllProducts()
  }
  get f() {
    return this.formGroup.controls;
  }

  initForm() {
    this.formGroup = this.fb.group({
      search: [
        '',
       Validators.compose([
         Validators.required,
         Validators.email
        ])
      ],
      productSearch:[
        '',
       Validators.compose([
         Validators.required,
         Validators.email
        ])
      ],
      categorySearch:[
        '',
       Validators.compose([
         Validators.required,
         Validators.email
        ])
      ],
      brandSearch:[
        '',
       Validators.compose([
         Validators.required,
         Validators.email
        ])
      ],
      filterBy: [
        '',
       Validators.compose([
         Validators.required,
         Validators.email
        ])
      ],
    })
  }

  getAllProducts(){
    this.AlertService.ShowSpinner()
    this.MoviesService.getAllProducts().subscribe((data:any)=>{
      this.loading = false;
      this.productsBrand =data
        this.colors =true
      this.AlertService.HideSpinner()
    }, (Error:any) => {
      console.log(Error.statusText)
      this.AlertService.alertError(Error.statusText + " You have been redirected back to the home page. Please check your internet connection and try again.")
      this.AlertService.HideSpinner()
      this.router.navigate(['/']);
    }
    )
  }
  getSelectedData(e: any) {
    const id = e.target.value
      console.log(id)
    
  }
  
  addToCart(item) {
    if (!this.CartService.itemInCart(item)) {
      this.CartService.addToCart(item); //add items in cart
      this.AlertService.alertSuccess(item.name + " has been successfully added to cart items.")
      this.totalQuantity += 1
      this.items = [...this.CartService.getItems()];
    }else{
      this.AlertService.alertError(item.name + " has already been added to cart.")
    }
    this._changeDetectorRef.detectChanges();
    
  }

  getInputData(e:any){
    const id = e.target.value
    console.log(id)   
  }

  getProduct(id:any){
    this.loading = true
    this.AlertService.ShowSpinner()
    this.MoviesService.getProductType(id).subscribe((data:any)=>{
      this.productsList = data
      this.AlertService.HideSpinner()
    },(Error:any) => {
      this.AlertService.HideSpinner()
      console.log(Error.name)
      this.AlertService.alertError(Error.name + " You have been redirected back to the home page. Please check your internet connection and try again.")
      this.AlertService.ShowSpinner()
      this.AlertService.HideSpinner()
      this.router.navigate(['/']);
    }
    )
  }

  getProductCategory(id:any){
    this.loading = true
    this.AlertService.ShowSpinner()
    this.MoviesService.getProductCategory(id).subscribe((data:any)=>{
      this.productCategory = data
      this.productColor = data.product_colors
      this.AlertService.HideSpinner()
    },
    (Error:any) => {
      console.log(Error.statusText)
      this.AlertService.HideSpinner()
      this.AlertService.alertError(Error.statusText + " You have been redirected back to the home page. Please check your internet connection and try again.")
      this.AlertService.ShowSpinner()
      // this.AlertService.reloadComponent()
      this.AlertService.HideSpinner()
      this.router.navigate(['/']);
    })
  }

  
  getProductBrand(id:any){
    this.loading = true
    this.AlertService.ShowSpinner()
    this.MoviesService.getProductBrand(id).subscribe((data:any)=>{
      this.brands = data
      this.productColor = data?.product_colors
      this.AlertService.HideSpinner()
    },
    (Error:any) => {
      console.log(Error.statusText)
      this.AlertService.HideSpinner()
      this.AlertService.alertError(Error.statusText + " You have been redirected back to the home page. Please check your internet connection and try again.")
      this.AlertService.ShowSpinner()
      // this.AlertService.reloadComponent()
      this.AlertService.HideSpinner()
      this.router.navigate(['/']);
    })
  }
  onSubmit(){
    console.log(this.f['search'].value)
  }
  
}


