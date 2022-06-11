import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './components/table/table.component';
import { ChampComponent } from './champ/champ.component';
import { NameComponent } from './name/name.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { TablePriceComponent } from './table/table-price/table-price.component';
import { FormComponent } from './components/form/form.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';

// Import thư viện ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { HeaderComponent } from './components/client/header/header.component';
import { FooterComponent } from './components/client/footer/footer.component';

import { SwiperModule } from "swiper/angular";
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { LoginComponent } from './pages/client/login/login.component';
import { RegisterComponent } from './pages/client/register/register.component';
import { ProductManagerComponent } from './pages/admin/product/product-manager/product-manager.component';
import { NavbarLeftComponent } from './components/admin/navbar-left/navbar-left.component';
import { NavbarTopComponent } from './components/admin/navbar-top/navbar-top.component';
import { ProductAddComponent } from './pages/admin/product/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product/product-edit/product-edit.component';

import { HttpClientModule } from '@angular/common/http';

// toastr
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ChampComponent,
    NameComponent,
    TableAvatarComponent,
    TablePriceComponent,
    FormComponent,
    ShowValidateComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ProductManagerComponent,
    NavbarLeftComponent,
    NavbarTopComponent,
    ProductAddComponent,
    ProductEditComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,

    // toastr
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
