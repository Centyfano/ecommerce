import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { ProductsComponent } from '../products/products.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'home',
    component: AdminComponent,
    children: [
      { path: 'categories', component: CategoriesComponent, },
      { path: 'products', component: ProductsComponent },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
