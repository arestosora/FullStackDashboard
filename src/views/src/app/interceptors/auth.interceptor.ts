import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuZHJlc2NhbXBvMjAwMEBnbWFpbC5jb20iLCJzdWIiOnsibmFtZSI6IkFmdGVySHViIn0sImlhdCI6MTcwMjcwNzI1OSwiZXhwIjoxNzAyNzI1MjU5fQ.t0VBzA8lLBQ0ikOF2nlyenASlZFyn8XC0kmpRuNzM9Y'; 
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return next.handle(authRequest);
  }
}
