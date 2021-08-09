import {
  Component,
  OnDestroy,
  OnInit,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy, PipeTransform {
  @Pipe({ name: 'capitalize' })
  products: Product[] = [];

  totalProd: number | any;
  hasLoaded: boolean | undefined;
  panelOpenState = true;
  hasgood = false;


  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor(
    public productService: ProductService,
    public dialog: MatDialog
  ) {}

  getProducts() {
    this.productService.viewProducts().subscribe((data: any) => {
      this.products = data.products;
      this.totalProd = this.products.length;
      console.log('prod are', this.products);
      this.hasLoaded = true;
    });
  }

  onOpenDetails(id: number) {
    console.log(id);
  }
  onAddProduct() {
    this.dialog.open(AddProductComponent);
  }

  transform(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  ngOnInit(): void {
    this.getProducts();
    // this.productService.currentMessage.subscribe((data) => {
    //   this.products = data;
    // });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
