import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  constructor(public categoryService: CategoryService) {}
  
  categoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  hasLoaded: boolean | undefined;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  onSubmit() {
    // console.log(this.categoryForm.value);
    this.hasLoaded = false;
    this.categoryService.addCategory(this.categoryForm.value).subscribe((e) => {
      console.log('added', e);
      this.hasLoaded = true;
    });
  }

  ngOnInit(): void {
    this.hasLoaded = true;
  }
}
