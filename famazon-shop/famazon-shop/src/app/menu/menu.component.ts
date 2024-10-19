import { Component } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems: Product[] = [
    { id: 1, name: 'Pizza Inferno', price: 15.50, available: true, description: 'A spicy delight with hot peppers and salami.', image: 'assets/pizza1.jpg' },
    { id: 2, name: 'Pizza Capricciosa', price: 15.50, available: true, description: 'A mix of flavors with artichokes and mushrooms.', image: 'assets/pizza2.jpg' },
    { id: 3, name: 'Pizza Margherita', price: 10.70, available: false, description: 'Classic pizza with mozzarella, tomatoes, and basil.', image: 'assets/pizza3.jpg' },
    { id: 4, name: 'Pizza Prosciutto', price: 15.50, available: true, description: 'A ham lovers delight with Italian prosciutto.', image: 'assets/pizza4.jpg' },
    { id: 5, name: 'Penne al Gorgonzola', price: 9.80, available: true, description: 'Creamy penne pasta with a touch of gorgonzola.', image: 'assets/pasta1.jpg' },
    { id: 6, name: 'Spaghetti Carbonara', price: 10.20, available: true, description: 'Classic carbonara with pancetta and a creamy sauce.', image: 'assets/pasta2.jpg' },
    { id: 7, name: 'Lasagna al Forno', price: 12.90, available: true, description: 'Rich lasagna baked with layers of cheese and beef.', image: 'assets/lasagna.jpg' },
    { id: 8, name: 'Fettuccine Alfredo', price: 11.50, available: true, description: 'Creamy fettuccine with parmesan cheese and butter.', image: 'assets/fettuccine.jpg' },
    { id: 9, name: 'Risotto ai Funghi', price: 14.00, available: true, description: 'Mushroom risotto made with porcini mushrooms.', image: 'assets/risotto.jpg' },
    { id: 10, name: 'Tagliatelle alla Bolognese', price: 13.00, available: true, description: 'Traditional tagliatelle with bolognese sauce.', image: 'assets/tagliatelle.jpg' },
    { id: 11, name: 'Tiramisu', price: 6.50, available: true, description: 'A classic Italian dessert with mascarpone and coffee.', image: 'assets/tiramisu.jpg' },
    { id: 12, name: 'Panna Cotta', price: 5.80, available: true, description: 'Silky smooth panna cotta with a berry compote.', image: 'assets/pannacotta.jpg' }
  ];

  constructor(private cartService: CartService) {}

  addToCart(item: Product) {
    this.cartService.addToCart(item);
  }
}
