import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {Restaurant} from './restaurant/restaurant.model'

@Injectable()
export class RestaurantsService{

    constructor(private http: Http){}

    restaurants(): Observable<Restaurant[]>{
        return this.http.get('/api/restaurants')
          .map(response => response.json());
    }
}