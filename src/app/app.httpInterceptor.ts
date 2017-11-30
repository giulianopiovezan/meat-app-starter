import {Injectable} from '@angular/core'
import {HttpInterceptor,
        HttpRequest,
        HttpHandler,
        HttpSentEvent,
        HttpHeaderResponse,
        HttpProgressEvent,
        HttpResponse,
        HttpUserEvent}
  from '@angular/common/http'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class Interceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        console.log('opa')
        return next.handle(req)
    }

}