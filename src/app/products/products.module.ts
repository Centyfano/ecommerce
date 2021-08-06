import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';

import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [ProductComponent, ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MatTableModule,
  ],
})
export class ProductsModule {}
