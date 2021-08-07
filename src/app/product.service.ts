import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  viewProducts() {
    const url = 'https://ecommerce-apis.herokuapp.com/products/product-list';
    return this.http.get<Product[]>(url).pipe(
      map((res: any) => {
        return {
          products: res.results.map((product: any) => {
            return {
              id: product.id,
              title: product.title,
              description: product.description,
              price: product.price,
              quantity: product.quantity,
              images: product.images,
              seller: product.seller,
              category: product.category,
            };
          }),
        };
      }),
      tap((_) => console.log('Fetched products'))
    );
  }

  createProduct() {}

  generateProductsPdf() {}
}
