import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  colsDisplayed = ['id', 'title'];
  fetched: boolean = false || true;
  count: number | undefined;
  constructor(private productService: ProductService) {}

  getProducts() {
    this.fetched = false;
    this.productService.viewProducts().subscribe((prod: any) => {
      this.products = prod;
      this.count = this.products.length;
      console.log(this.products);
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
