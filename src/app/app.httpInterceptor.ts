import {Injectable} from '@angular/core'
import {HttpInterceptor,
        HttpRequest,
        HttpHandler,
        HttpEvent,
        HttpResponse,
        HttpErrorResponse
    }
  from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';

@Injectable()
export class Interceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       console.log('interceptando...')
       return next.handle(request)
        .do((event: HttpEvent<any>) => {
            if(event instanceof HttpResponse){
                console.log('processando resposta')
            }
        }).catch((response: HttpEvent<any>) => {
            if(response instanceof HttpErrorResponse){
                if((<HttpErrorResponse> response).status == 404){
                    console.log('Ocorreu um erro interno no servidor')
                }
            }
            return Observable.throw(response)
        })
    }
}