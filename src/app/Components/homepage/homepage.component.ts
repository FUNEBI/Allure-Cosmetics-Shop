import { UsersService } from './../../Services/users/users.service';
import { Component, EventEmitter, OnInit, Output,ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/Services/movies.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
// import { UtilityService } from "src/app/core/utilityService/UtilitiesService";
import { CommentsService } from 'src/app/Services/comments/comments.service';
import { CartServiceService } from 'src/app/Services/cartService/cart-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit{

  
  @Output() productCategory = new EventEmitter<string>();
  highestRated:any
  items=[]
  highP: any;
  productType:any
  highCategory: any;
  highPrice: any;
  highImage: any;
  nail:string="pencil";
  foundation:string="powder"
  blush:string="palette";
  lipstick:string="lipstick"
  usersComments:any;
  loading:boolean=false;
  formGroup!: FormGroup;
  totalQuantity: number;
  productsBrand: any;

  constructor(
    public MoviesService:MoviesService,
    private CartService:CartServiceService,
    private fb:FormBuilder,
    public UsersService: UsersService,
    public CommentsService:CommentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.initForm()
    this.getHighestRated()
    this.getusers()
  }

  get f() {
    return this.formGroup.controls;
  }

  initForm() {
    this.formGroup = this.fb.group({
      email: [
        '',
       Validators.compose([
         Validators.required,
         Validators.email
        ])
      ],
      
    })
  }

  getHighestRated(){
    this.MoviesService.getProductRatingLessThan(2)
    .subscribe((data:any)=>{
      console.log(data)
      this.highestRated = data[0]
    })
  }

  getComments(){
    // this.CommentsService.getAllComments()
    // .subscribe((data:any)=>{
    //   console.log(data)
      // if(data){
      //    this.usersComments = data.filter(function(users:any){
      //     return users.postId==3
      //   })
      //   console.log(this.usersComments)
      // }
    // })
  }

  getProductType(productType:string){
    this.MoviesService.getProductType(productType)
    .subscribe((data:any)=>{
      console.log(data)   
    })
  }

  onItemSelector(e:any){
    const value = e
    console.log(value)
    console.log(this.productCategory.emit(e));
  }

  addToCart(item) {
    if (!this.CartService.itemInCart(item)) {
      this.totalQuantity += 1
      this.CartService.addToCart(item); //add items in cart
      this.items = [...this.CartService.getItems()];
      console.log(this.items)
    }
  }
 
  
  getusers(){
    this.UsersService.getUsers()
      .subscribe((data:any)=>{
        if(data){
          console.log(data)
          this.usersComments = data.users.filter(function(users:any){
            return users.gender == 'male'
          })
        }
        
      })
  }

}
