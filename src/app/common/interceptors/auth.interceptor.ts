import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { environment } from '../../../environments/environment.development'

export class AuthInterceptor implements HttpInterceptor {
  constructor () {}
  intercept (req: HttpRequest<any>, next: HttpHandler) {
    req = req.clone({
      headers: req.headers.set('Aegro-Public-API-Key', environment.token)
    })

    return next.handle(req)
  }
}
