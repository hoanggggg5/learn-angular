import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProductAddComponent } from './pages/admin/product/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product/product-edit/product-edit.component';
import { ProductManagerComponent } from './pages/admin/product/product-manager/product-manager.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { LoginComponent } from './pages/client/login/login.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { RegisterComponent } from './pages/client/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'cart',
        component: CartComponent
      },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    // Vì không có màn Dashboard, Muốn khi vào /admin sẽ tự điều hướng sang /admin/users
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        children : [
          {
            path: '',
            component: ProductManagerComponent,
          },
          {
            path: 'add',
            component: ProductAddComponent,
          },
          {
            path: 'edit/:id',
            component: ProductEditComponent,
          },
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
