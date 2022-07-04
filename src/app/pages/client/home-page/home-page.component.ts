import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/types/category';
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
  categories: Category[];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) { 
    this.products = []
    this.categories = []
  }

  ngOnInit(): void {
   this.onGetProducts()
   this.onGetCategories()
  }

  onGetProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

  onGetCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(data);
    });
  }
}
