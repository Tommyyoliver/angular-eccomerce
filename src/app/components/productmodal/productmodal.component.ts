import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../model/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-productmodal',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './productmodal.component.html',
  styleUrl: './productmodal.component.scss'
})
export class ProductmodalComponent implements OnInit{

  private _apiService = inject(ApiService);

  isEmpty: boolean = false;
  productsToCart: IProduct[] = [];
  aux: IProduct[] = [];
  
  ngOnInit(): void {
    this._apiService.Cart.subscribe((data: IProduct[]) => {
      this.productsToCart = data;
    })
  }

  deleteFromCart(id: number) {
    this._apiService.deleteFromCart(id);
  }


}
