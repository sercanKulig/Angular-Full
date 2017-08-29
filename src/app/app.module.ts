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
import {HeaderComponent} from './header/header.component';
import {NotificationsService, SimpleNotificationsModule} from 'angular2-notifications/dist';

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
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    {provide: 'apiUrl', useValue: 'http://northwindapi.azurewebsites.net/api'},
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
