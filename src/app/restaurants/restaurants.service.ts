import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Restaurant} from './restaurant/restaurant.model'
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'

@Injectable()
export class RestaurantsService{

    constructor(private http: HttpClient){}

    restaurants(): Observable<Restaurant[]>{
        return this.http.get<Restaurant[]>('/api/restaurants')
    }

    restaurant(id: string): Observable<Restaurant>{
        return this.http.get<Restaurant>(`/api/restaurants/${id}`)
    }

    reviews(id: string): Observable<any>{
        return this.http.get<any>(`/api/restaurants/${id}/reviews`)
    }

    menus(id: string): Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>(`/api/restaurants/${id}/menu`)
    }
}