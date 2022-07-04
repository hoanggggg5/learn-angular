import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any;
  count: number;
  total: number;

  constructor() {
    this.products = []
    this.count = 1
    this.total = 0
  }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem("cart") as string);
    this.total = this.products.reduce((previousValue: number, product: Product) => 
      product.quantity ? (previousValue + (product.price * product.quantity)) : (previousValue + product.price)
    , 0)
    console.log(this.total)
  }

  subCount() {
    this.count -= 1
  }

  addCount() {
    this.count += 1
  }

  deleteCart(id: string) {
    const findIndexProduct = this.products.findIndex(
      (product: any) => product.id == id,
    );
    this.products.splice(findIndexProduct, 1);
    localStorage.setItem("cart", JSON.stringify(this.products));
  }
}
