import { Component, OnInit } from '@angular/core';
import {CartItem} from './cart-item.model'
import {ShoppingCartService} from './shopping-cart.service'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private service: ShoppingCartService) { }

  ngOnInit() {
  }

  total(): number{
    return this.service.total()
  }

  items(): CartItem[]{
    return this.service.items
  }

  addItem(item: any){
    this.service.addItem(item)
  }

  removeItem(item: any){
    this.service.removeItem(item)
  }

}
