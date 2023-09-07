import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderMasterComponent } from './components/order/order-master/order-master.component';
import { ProductListComponent } from './components/order/product-list/product-list.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  
  {path:"", component:MainLayoutComponent, children:[
    {path:"",redirectTo:'/products', pathMatch:"full"},
    {path:"products", component: ProductListComponent},
    {path:"product/:id", component: ProductComponent},
    {path:"order", component: OrderMasterComponent},
    {path:"register", component: RegisterComponent},
    {path:"login", component: LoginComponent},
    {path:"**",component:NotfoundComponent}
  ]} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
