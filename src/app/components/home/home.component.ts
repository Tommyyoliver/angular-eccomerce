import { Component } from '@angular/core';
import { ProductlistComponent } from '../productlist/productlist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductlistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
