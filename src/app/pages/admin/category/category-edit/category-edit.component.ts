import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  id: string;
  category: Category;
  categoryForm: FormGroup;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
  ) { 
    this.id = ""
    this.category = {
      _id: "",
      category: "",
    }
    this.categoryForm = new FormGroup({
      category: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.onGetCategory()
  }

  onGetCategory() {
    this.categoryService.getCategory(this.id).subscribe(data => {
      this.category = data.category;
      this.categoryForm.patchValue({
        category: this.category,
      });
    });
  }

  onSubmit() {
    const submitData = this.categoryForm.value;
    try {
      this.categoryService.updateCategory(this.id, submitData).subscribe((data) => {
        this.router.navigateByUrl('/admin/categories');
      })
    } catch (error) {
      return error
    }
  }
}
