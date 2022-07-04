import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from "../../../../types/category";

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.css']
})
export class CategoryManagerComponent implements OnInit {
  categories: Category[];
  constructor(
    private categoryService: CategoryService,
  ) { 
    this.categories = []
  }

  ngOnInit(): void {
   this.onGetCategories()
  }

  onGetCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(data);
    });
  }

  onDelete(id: number | string) {
    const confirmDelete = confirm('Bạn có chắc chắn xoá không?');

    if (confirmDelete) {
      this.categoryService.deleteCategory(id).subscribe((data) => {
        console.log(data); 
        this.onGetCategories();
      })
    }
  }
}
