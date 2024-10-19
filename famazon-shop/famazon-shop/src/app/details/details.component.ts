import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Fetch product by ID (this is just a placeholder; replace with real data fetching)
    this.product = {
      id: +(id ?? 0),
      name: 'Product Example',
      price: 20,
      description: 'Sample product description',
      available: true,
      image: 'product1.jpg'
    };
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
