import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../types/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.categories);
  }

  getCategory(id: string|number): Observable<any> {
    return this.http.get<any>(environment.category + '/' + id);
  }

  addCategory(Category: Category): Observable<any> {
    return this.http.post(environment.category + '/', Category);
  }

  updateCategory(id: string|number, category: Category): Observable<any> {
    return this.http.patch(environment.category + '/' + id, category);
  }

  deleteCategory(id: string|number): Observable<any> {
    return this.http.delete(environment.category + '/' + id);
  }
}
