import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  hasLoaded: boolean | undefined;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  categories = [
    { value: 'test1', viewValue: 'A test category' },
    { value: 'test2', viewValue: 'Another test category' },
    { value: 'test3', viewValue: 'A final category' },
  ];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}
  imagePreview: ArrayBuffer[] | string | undefined;

  productForm = this.fb.group({
    category: ['', Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    quantity: ['', Validators.required],
    images: this.fb.array([this.fb.control('')]),
  });

  ngOnInit(): void {}

  onImagePick(event: Event) {
    const file:Blob = (event.target as HTMLInputElement | any).files;
    this.productForm.patchValue({ images: [file] });
    this.productForm.get('images')?.updateValueAndValidity();
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.imagePreview = reader.result;
    //   console.log(this.imagePreview);
    // };
    // reader.readAsDataURL(file);

    this.productService.uploadImage(file);
  }
  onSubmit() {}
}
