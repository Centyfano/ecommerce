import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/product.service';
import { AddCategoryComponent } from 'src/app/categories/add-category/add-category.component';
import { MatDialog } from '@angular/material/dialog';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

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
          { title: 'total sales', cols: 4, rows: 1, fig: 123456, perc: 0.0348 },
          { title: 'new users', cols: 4, rows: 1, fig: 2345, perc: -0.0348 },
          { title: 'today sales', cols: 4, rows: 1, fig: 924, perc: 0.0348 },
          { title: 'profit', cols: 4, rows: 1, fig: 0.48, perc: 0.0348 },
        ];
      }

      return [
        { title: 'total sales', cols: 1, rows: 1, fig: 123456, perc: 0.0348 },
        { title: 'new users', cols: 1, rows: 1, fig: 2345, perc: -0.0348 },
        { title: "today's sales", cols: 1, rows: 1, fig: 924, perc: 0.0348 },
        { title: 'profit', cols: 1, rows: 1, fig: 48.65, perc: 0.0348 },
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public productService: ProductService,
    public dialog: MatDialog
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

  addCategoryModal() {
    this.dialog.open(AddCategoryComponent, {
      width: '50vw',
    });
  }

  generatePdf() {
    const docDefinition = {
      header: 'C#Corner PDF Header',
      content:
        'Sample PDF generated with Angular and PDFMake for C#Corner Blog',
    };

    pdfMake.createPdf(
      docDefinition,
      {},
      {
        // Default font should still be available
        Roboto: {
          normal: 'Roboto-Regular.ttf',
          bold: 'Roboto-Medium.ttf',
          italics: 'Roboto-Italic.ttf',
          bolditalics: 'Roboto-Italic.ttf',
        },
        // Make sure you define all 4 components - normal, bold, italics, bolditalics - (even if they all point to the same font file)
        TimesNewRoman: {
          normal: 'Times-New-Roman-Regular.ttf',
          bold: 'Times-New-Roman-Bold.ttf',
          italics: 'Times-New-Roman-Italics.ttf',
          bolditalics: 'Times-New-Roman-Italics.ttf',
        },
      },
      pdfFonts.pdfMake.vfs
    );
  }
  ngOnInit() {
    this.getProducts();
  }
}
