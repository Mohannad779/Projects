import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  cart: Product[] = [];
  total = 0;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cart.reduce((acc, item) => acc + (item.price || 0), 0);

    if (this.total > 40) {
      this.total *= 0.85;  // Apply 15% discount
    }

    this.total *= 1.10;  // Add 10% service charge
  }
}
