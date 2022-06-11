import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Router } from 'express';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  products: Product[];
  constructor(
    private productService: ProductService,
  ) { 
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

  onDelete(id: number | string) {
    const confirmDelete = confirm('Bạn có chắc chắn xoá không?');

    if (confirmDelete) {
      this.productService.deleteProduct(id).subscribe((data) => {
        console.log(data); 
        this.onGetProducts();
      })
    }
  }
}
