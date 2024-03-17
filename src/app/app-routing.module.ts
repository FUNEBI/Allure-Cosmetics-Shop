import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ProductCategoryComponent } from './Components/product-category/product-category.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'shop',component:ShopComponent},
  {path:'product-details/:id',component:ProductDetailsComponent},
  {path:'product-category/:category',component:ProductCategoryComponent},
  {path:'cart-details',component:ShoppingCartComponent},
  {path:'about',component:AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
