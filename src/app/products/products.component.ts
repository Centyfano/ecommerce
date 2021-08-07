import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  hasLoaded: boolean | undefined;
  hasgone = false;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor(
    public productService: ProductService,
    public dialog: MatDialog
  ) {}

  getProducts() {
    this.productService.viewProducts().subscribe((data: any) => {
      this.products = data.products;
      console.log(this.products);
      this.hasLoaded = true;
    });
  }

  onOpenDetails(id: number) {
    console.log(id);
  };
  onAddProduct() {
    this.dialog.open(AddProductComponent);
  }
  ngOnInit(): void {
    this.getProducts();
  }
}
