import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { LocalStorageService } from "../core/local-storage/local-storage.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(
        private localStorageService: LocalStorageService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.localStorageService.getAccessToken();
        const apiEndpoint = 'http://localhost:3000';

        const skipList = [
            `${apiEndpoint}/auth/login`,
            `${apiEndpoint}/users`
        ]

        const needToAddToken = skipList.includes(request.url) && request.method === 'post';

        if (token && !needToAddToken) {
            // If we have a token, we set it to the header
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }

        return next.handle(request).pipe(
            catchError((err) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        // redirect user to the logout page
                    }
                }
                return throwError(err);
            })
        )
    }
}