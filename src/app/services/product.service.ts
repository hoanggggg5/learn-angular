import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products);
  }

  getProduct(id: string|number): Observable<Product> {
    return this.http.get<Product>(environment.product + '/' + id);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(environment.product + '/', product);
  }

  updateProduct(id: string|number, product: Product): Observable<any> {
    return this.http.patch(environment.product + '/' + id, product);
  }

  deleteProduct(id: string|number): Observable<any> {
    return this.http.delete(environment.product + '/' + id + '/' + "62412c7110cd92c4f9836859");
  }
}
