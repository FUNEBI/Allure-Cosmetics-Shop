import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private Router: Router, private spinner: NgxSpinnerService ) {


  }


  alertSuccess(message:string){
    Swal.fire('Successful ', message, 'success')
  }


  ShowSpinner(){

    this.spinner.show();
  }


  HideSpinner(){

    this.spinner.hide();
  }

  alertError(message:string){
    Swal.fire('Failed', message, 'error')
  }

  Unauthorize(message:string){   Swal.fire(' ! UnAuthorize Acccess ', message, 'error')}


  reloadComponent() {
    let currentUrl = this.Router.url;
        this.Router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.Router.onSameUrlNavigation = 'reload';
        this.Router.navigate([currentUrl]);
    }
}
