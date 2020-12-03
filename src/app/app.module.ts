import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './comps/home-page/home-page.component';
import { LightingCandlesListComponent } from './comps/lighting-candles-list/lighting-candles-list.component';
import { ChanukiaListComponent } from './comps/chanukia-list/chanukia-list.component';
import { SingleitemComponent } from './comps/singleitem/singleitem.component';
import { MyCartComponent } from './comps/my-cart/my-cart.component';
import { CheckOutComponent } from './comps/check-out/check-out.component';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckoutComponent } from './comps/checkout/checkout.component';
import { HeaderComponent } from './comps/header/header.component';
import { FooterComponent } from './comps/footer/footer.component';
import { KidushComponent } from './comps/kidush/kidush.component';
import { PageNotFoundComponent } from './comps/page-not-found/page-not-found.component';
import { SigninComponent } from './comps/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { KeepcontactComponent } from './comps/keepcontact/keepcontact.component';
import { SignupComponent } from './comps/signup/signup.component';
import { AdditemComponent } from './comps/additem/additem.component';
import { AdminpanelComponent } from './comps/adminpanel/adminpanel.component';
import { EdititemComponent } from './comps/edititem/edititem.component';
import { MapComponent } from './comps/map/map.component';
import { ContactusComponent } from './comps/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LightingCandlesListComponent,
    ChanukiaListComponent,
    SingleitemComponent,
    MyCartComponent,
    CheckOutComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    KidushComponent,
    PageNotFoundComponent,
    SigninComponent,
    KeepcontactComponent,
    SignupComponent,
    AdditemComponent,
    AdminpanelComponent,
    EdititemComponent,
    MapComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
