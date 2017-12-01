import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {RestaurantsService} from '../../restaurants/restaurants.service'
import {MenuItem} from '../menu-item/menu-item.model'

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menus: MenuItem[]

  constructor(private service: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.menus(this.route.parent.snapshot.params['id'])
       .subscribe(res => this.menus = res)
  }

}
