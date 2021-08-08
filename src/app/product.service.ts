import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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

  productSource: any;
  products: any;

  shareData(data: any) {
    this.productSource = new BehaviorSubject(data);
    this.products = this.productSource.asObservable();
    return this.productSource.asObservable().then(console.log(3));
  }

  getData() {
    return this.products;
  }

  createProduct() {}

  public editDataDetails: any = [];
  // public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentMessage = this.messageSource.asObservable();

  sendData(message: any) {
    this.messageSource.next(message);
  }

  uploadImage(image: any) {
    const url = 'https://ecommerce-apis.herokuapp.com/fileupload/upload-image';
    return this.http
      .post(url, image)
      .pipe(
        map((data: any) => {
          return data;
        }),
        tap((_) => console.log('images uploaded'))
        // catchError(this.handleError('post image'))
      )
      .subscribe((e) => {
        console.log('posted ', e);
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
  generateProductsPdf() {}
}
