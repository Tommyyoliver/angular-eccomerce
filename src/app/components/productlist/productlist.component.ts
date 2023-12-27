import { Component, OnInit, inject } from '@angular/core';
import { ProductitemComponent } from '../productitem/productitem.component';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../model/product.model';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [ProductitemComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent implements OnInit{

  private _apiService = inject(ApiService);
  productsList: IProduct[] = [];

  ngOnInit(): void {
    this.productsList = this._apiService.getProducts();
  }

}
