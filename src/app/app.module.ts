import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ContactComponent } from './Components/contact/contact.component';
import { BlogComponent } from './Components/blog/blog.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ObjectToArraypipePipe } from './pipe/object-to-arraypipe.pipe';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { CurrencyPipe } from '@angular/common';
import { ProductCategoryComponent } from './Components/product-category/product-category.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ShopComponent,
    ContactComponent,
    BlogComponent,
    NavbarComponent,
    FooterComponent,
    ObjectToArraypipePipe,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ProductCategoryComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule, 
    SweetAlert2Module.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    BrowserAnimationsModule,
    ReactiveFormsModule ,
    InlineSVGModule.forRoot(),
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    CurrencyPipe
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
