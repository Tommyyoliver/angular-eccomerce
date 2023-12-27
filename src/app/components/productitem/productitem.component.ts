import { Component, Input, inject } from '@angular/core';
import { IProduct } from '../../model/product.model';
import { CurrencyPipe } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-productitem',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './productitem.component.html',
  styleUrl: './productitem.component.scss'
})
export class ProductitemComponent {

  @Input() product?: IProduct;

  private _apiService = inject(ApiService);

  addToCart(id?: number) {
    this._apiService.addToCart(id);
  }

}
