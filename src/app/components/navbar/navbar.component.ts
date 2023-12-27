import { Component } from '@angular/core';
import { ProductmodalComponent } from '../productmodal/productmodal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ProductmodalComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  showedCart: boolean = true;
  showedMenu: boolean = true;

  showCart() {
    this.showedCart = !this.showedCart;
    if(!this.showedCart) this.showedMenu = true;
  }
  showMenu() {
    this.showedMenu = !this.showedMenu;
    if(!this.showedMenu) this.showedCart = true;
  }

}
