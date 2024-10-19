import { Component } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 20, description: 'Description 1', available: true, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 35, description: 'Description 2', available: false, image: 'product2.jpg' }
    // Add more products as necessary...
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
