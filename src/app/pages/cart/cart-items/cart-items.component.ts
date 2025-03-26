import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product.models';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-items',
  imports: [ButtonComponent],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css'
})
export class CartItemsComponent {
  cartService=inject(CartService)
item=input.required<Product>()
}
