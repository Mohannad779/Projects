import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Product[] = [];
  total = 0;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cart.reduce((acc, item) => acc + item.price, 0);
  }
}
