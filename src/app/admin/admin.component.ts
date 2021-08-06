import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  products: Product[] = [];
  count: number | undefined;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
  getProducts() {
    this.productService.viewProducts().subscribe((prod: any) => {
      this.products = prod;
      this.count = this.products.length;
      console.log(this.products);
    });
  }
}
