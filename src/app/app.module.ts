import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductComponent } from './components/order/product/product.component';
import { LightBoxDirective } from './directives/light-box.directive';
import { USDtoEGPPipe } from './pipes/usdto-egp.pipe';
import { DefaultPicturePipe } from './pipes/default-picture.pipe';
import { OrderMasterComponent } from './components/order/order-master/order-master.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    FooterComponent,
    SidebarComponent,
    ProductComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    DefaultPicturePipe,
    OrderMasterComponent
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
