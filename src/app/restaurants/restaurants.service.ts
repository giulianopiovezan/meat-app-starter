import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Restaurant} from './restaurant/restaurant.model'

@Injectable()
export class RestaurantsService{

    constructor(private http: HttpClient){}

    restaurants(): Observable<Restaurant[]>{
        return this.http.get<Restaurant[]>('/api/restaurants')
    }
}