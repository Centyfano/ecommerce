import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AddCategoryComponent } from './add-category/add-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(public dialog: MatDialog){}
  addCategoryModal() {
    this.dialog.open(AddCategoryComponent,
      {
        width: '50vw',
        // backdropClass: 'overlay'
      }
    )
  }
  
}
