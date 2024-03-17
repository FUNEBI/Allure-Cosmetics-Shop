import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllProducts(): Observable<any> {
    const url = 'http://makeup-api.herokuapp.com/api/v1/products.json';
    return this.http.get<any>(url)
  }

  public getProductType(name:string): Observable<any> {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${name}`;
    return this.http.get<any>(url)
  }

  public getProductCategory(category:string): Observable<any> {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_category=${category}`;
    return this.http.get<any>(url)
  }

  public getProductBrand(brand:string): Observable<any> {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;
    return this.http.get<any>(url)
  }
  
  public getProductByProductId(id:string): Observable<any> {
    const url = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    return this.http.get<any>(url)
  }

  public getProductPriceGreaterThan(price:number): Observable<any> {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?price_greater_than=${price}`;
    return this.http.get<any>(url)
  }

  public getProductPriceLessThan(price:number): Observable<any> {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?price_less_than=${price}`;
    return this.http.get<any>(url)
  }

  public getProductRatingLessThan(rate:number): Observable<any> {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?rating_less_than=${rate}`;
    return this.http.get<any>(url)
  }
  public getProductRatingGreaterThan(rate:number): Observable<any> {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=${rate}`;
    return this.http.get<any>(url)
  }

  public getProductByBrandAndProductType(brand:string,productType:string): Observable<any> {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${productType}`;
    return this.http.get<any>(url)
  }

}
