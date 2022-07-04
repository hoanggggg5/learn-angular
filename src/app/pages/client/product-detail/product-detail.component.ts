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
  count: number;

  constructor(
    private productService: ProductService, // cung cấp createProduct
    private activateRoute: ActivatedRoute // lấy ra các tham số trong url) { 
  ) {
    this.product = {} as Product
    this.productId = '';
    this.count = 1
  }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['id'];

    this.productService.getProduct(this.productId).subscribe(data => {
      this.product = data;
      console.log(data);
    });
  }

  subCount() {
    this.count -= 1
  }

  addCount() {
    this.count += 1
  }

  addCart() {
    const newProduct = {
      ...this.product,
      quantity: this.count,
    };
    let cartProduct: any = JSON.parse(localStorage.getItem("cart") as string);
    if (!cartProduct) cartProduct = [];
    const existProduct = cartProduct.find((product: Product) => product._id == this.productId);
    if (!existProduct) {
      cartProduct.push(newProduct);
    } else {
      existProduct.quantity = this.count;
    }

    console.log("áaaaa", cartProduct);
    localStorage.setItem("cart", JSON.stringify(cartProduct));
    alert("Add product successfully");
  }
}
