import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductListComponent } from './components/order/product-list/product-list.component';
import { LightBoxDirective } from './directives/light-box.directive';
import { USDtoEGPPipe } from './pipes/usdto-egp.pipe';
import { DefaultPicturePipe } from './pipes/default-picture.pipe';
import { OrderMasterComponent } from './components/order/order-master/order-master.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    FooterComponent,
    SidebarComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    DefaultPicturePipe,
    OrderMasterComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    MainLayoutComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
