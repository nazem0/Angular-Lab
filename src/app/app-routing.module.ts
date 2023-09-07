import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderMasterComponent } from './components/order/order-master/order-master.component';
import { ProductListComponent } from './components/order/product-list/product-list.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path:"",redirectTo:'/products', pathMatch:"full"},
  {path:"products", component: ProductListComponent},
  {path:"order", component: OrderMasterComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
