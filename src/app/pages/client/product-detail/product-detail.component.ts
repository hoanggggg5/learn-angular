import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId: string;
  product: Product;

  constructor(
    private productService: ProductService, // cung cấp createProduct
    private activateRoute: ActivatedRoute // lấy ra các tham số trong url) { 
  ) {
    this.product = {} as Product
    this.productId = '';
  }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['id'];

    this.productService.getProduct(this.productId).subscribe(data => {
      this.product = data;
      console.log(data);
    });
  }

}
