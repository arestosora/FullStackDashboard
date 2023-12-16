import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pages/pedidos/pedidos.component';


const routes: Routes = [
  { path: '', component: PedidosComponent }
  // { path: 'today', component: TodayComponent },
  // { path: 'food-list', component: FoodListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
