import { Component, OnInit, QueryList, ViewChildren,ChangeDetectorRef  } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { CartServiceService } from 'src/app/Services/cartService/cart-service.service';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faMapMarkerAlt as solidIcon } from '@fortawesome/pro-solid-svg-icons/faMapMarkerAlt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @ViewChildren('dd')
  dds!: QueryList<NgbDropdown>;
  totalItemsIncart:any
  navbarCollapsed = true;
  unsubscribe: any;
  constructor(
    private CartService:CartServiceService,
    private _changeDetectorRef: ChangeDetectorRef,
  ){}

  ngOnInit(): void {
    const items = this.CartService.getItems()
        // this.totalItemsIncart = items.length

    this.CartService.getCount().subscribe(count => {
      this.totalItemsIncart = count
      }
    );
  }
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
  actionClick() {
    this.dds.forEach((dd) => {
      dd.close();
    })
  }
}
