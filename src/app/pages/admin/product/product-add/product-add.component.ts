import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  
  constructor(
    private productService: ProductService, // cung cấp createProduct
    private router: Router, // cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute, // lấy ra các tham số trong url

    private toastr: ToastrService
  ) {
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
  }

  onSubmit() {
    const submitData = this.productForm.value;
    console.log(submitData);

    try {
      this.productService.addProduct(submitData).subscribe((data) => {
        this.router.navigateByUrl('/admin/products');
      })
    } catch (error) {
      return error
    }

    // this.showSuccess()
  }

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

}
