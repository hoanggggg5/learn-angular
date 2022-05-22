import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { ChampComponent } from './champ/champ.component';
import { NameComponent } from './name/name.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { TablePriceComponent } from './table/table-price/table-price.component';
import { FormComponent } from './form/form.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';

import { FormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
