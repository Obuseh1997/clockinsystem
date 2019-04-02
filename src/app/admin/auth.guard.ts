import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, 
           Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard {

    constructor(private router: Router,
                private auth: AuthService) { 

                }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return  this.auth.isLoggedin ;
        }
}