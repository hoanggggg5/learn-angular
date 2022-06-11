import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product';

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) { 
    this.products = []
  }

  ngOnInit(): void {
   this.onGetProducts()
  }

  onGetProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }
}
