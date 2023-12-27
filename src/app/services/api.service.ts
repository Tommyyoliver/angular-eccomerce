import { Injectable } from '@angular/core';
import { IProduct } from '../model/product.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private productsList: IProduct[] = [
    {
      id: 1,
      title: "Brown sweatshirt 'Los Angeles'",
      image: "0fd8b7c477a074f42789e7a4f44a2fea.jpg",
      rating: 3.9,
      price: 99,
    },
    {
      id: 2,
      title: "Black sweatshirt 'Los Angeles'",
      image: "21fae299fbbefdf65dbdf13b51f5a08a.jpg",
      rating: 4.2,
      price: 129,
    },
    {
      id: 3,
      title: "White sweatshirt 'Chicago USA'",
      image: "30dd2fcd79b79d8293136bf448cf5150.jpg",
      rating: 4.1,
      price: 99,
    },
    {
      id: 4,
      title: "Black sweatshirt 'Brooklyn New York'",
      image: "dace08cec25cf309b7148d41c0487f3b.jpg",
      rating: 3.8,
      price: 109,
    },
    {
      id: 5,
      title: "Black sweatshirt 'Chicago USA'",
      image: "e9b1adff020087078f297735315a509e.jpg",
      rating: 4.3,
      price: 89,
    },
  ]

  private auxProductCart: IProduct[] = [];
  private observerProductsCart: Subject<IProduct[]> = new Subject<IProduct[]>();

  product?: IProduct;

  getProducts(): IProduct[] {
    return this.productsList;
  }

  get Cart(): Observable<IProduct[]> {
    return this.observerProductsCart.asObservable();
  }

  addToCart(id?: number): void {
    this.product = this.productsList.find(p => p.id == id);
    if(this.product && !this.auxProductCart.includes(this.product)) {
      this.auxProductCart.push(this.product);
      this.observerProductsCart.next(this.auxProductCart);
    }
  }

  deleteFromCart(id: number) {
    this.auxProductCart = this.auxProductCart.filter(p => p.id != id);
    this.observerProductsCart.next(this.auxProductCart);
  }

}
