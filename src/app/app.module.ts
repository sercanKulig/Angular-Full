import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {CatagoryComponent} from './catagory/catagory.component';
import {CartComponent} from './cart/cart.component';
import {AccountComponent} from './account/account.component';
import {ShippingDetailComponent} from './shipping-detail/shipping-detail.component';
import {CartSummaryComponent} from './cart/cart-summary/cart-summary.component';
import {LoggedComponent} from './account/logged/logged.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CatagoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    {provide: 'apiUrl', useValue: 'http://northwindapi.azurewebsites.net/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
