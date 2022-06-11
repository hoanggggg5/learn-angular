import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: string;
  product: Product;
  productForm: FormGroup;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) { 
    this.id = ""
    this.product = {
      _id: "",
      category: "",
      name: "",
      price: 0,
      desc: "",
      img: "",
    }
    this.productForm = new FormGroup({
      // name: new FormControl('', Validators.required),
      name: new FormControl('', [
        Validators.required,
      ]),
      category: new FormControl("", Validators.required),
      price: new FormControl(0, Validators.required),
      desc: new FormControl("", Validators.required),
      img: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.onGetProduct()
  }

  onGetProduct() {
    this.productService.getProduct(this.id).subscribe(data => {
      this.product = data;
      console.log(data);
      this.productForm.patchValue({
        name: data.name,
        price: data.price,
        desc: data.desc,
        img: data.img,
      });
    });
  }

  onSubmit() {
    const submitData = this.productForm.value;
    console.log(submitData);

    try {
      this.productService.updateProduct(this.id, submitData).subscribe((data) => {
        this.router.navigateByUrl('/admin/products');
      })
    } catch (error) {
      return error
    }
  }
}
