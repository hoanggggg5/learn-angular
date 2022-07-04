import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/types/category';
import { Product } from 'src/app/types/product';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories: Category[];
  user: User;
  isLogged: boolean;
  email: string;
  countProductCart: number;

  constructor(
    private categoryService: CategoryService,
  ) { 
    this.categories = []
    this.user = {
      token: "",
      user: {
        _id: "",
        email: "",
        role: 0
      }
    }
    this.isLogged = false;
    this.email = ""
    this.countProductCart = 0
  }

  ngOnInit(): void {
   this.onGetCategories()

   const loggedInUser = localStorage.getItem('user');

   // 2. Kiểm tra nếu có thì cho vào admin
   if (loggedInUser) {
     this.user = JSON.parse(loggedInUser);
     this.isLogged = true;
     this.email = this.user.user.email;
   }

   this.countProductCart = JSON.parse(localStorage.getItem("cart") as string).length;
  }

  onGetCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(data);
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.isLogged = false;
    this.email = "";
  }
}
