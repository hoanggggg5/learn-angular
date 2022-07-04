import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryForm: FormGroup;
  
  constructor(
    private categoryService: CategoryService, // cung cấp createCategory
    private router: Router, // cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute, // lấy ra các tham số trong url

    private toastr: ToastrService
  ) {
    this.categoryForm = new FormGroup({
      category: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const submitData = this.categoryForm.value;
    console.log(submitData);

    try {
      this.categoryService.addCategory(submitData).subscribe((data) => {
        this.router.navigateByUrl('/admin/categories');
      })
    } catch (error) {
      return error
    }
  }

}
