import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './categories/category/category.component';
import { ProductComponent } from './products/product/product.component';



@NgModule({
  declarations: [
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DashboardModule { }
