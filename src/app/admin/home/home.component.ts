import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/product.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  totalProd: number | any;
  hasLoaded: boolean = false;
  products: Product[] = [];

  /** Based on the screen size, switch from standard to one column per row */

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 4, rows: 1 },
          { title: 'Card 2', cols: 4, rows: 1 },
          { title: 'Card 3', cols: 4, rows: 1 },
          { title: 'Card 4', cols: 4, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public productService: ProductService
  ) {}

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  getProducts() {
    this.productService.viewProducts().subscribe((data: any) => {
      this.products = data.products;
      this.totalProd = this.products.length;
      console.log('prod are', this.products);
      this.productService.sendData(data);
      this.hasLoaded = true;
    });
  }

  generatePdf() {
    const docDefinition = {
      header: 'C#Corner PDF Header',
      content:
        'Sample PDF generated with Angular and PDFMake for C#Corner Blog',
    };

    pdfMake.createPdf(docDefinition).open();
  }
  ngOnInit() {
    this.getProducts();
  }
}
