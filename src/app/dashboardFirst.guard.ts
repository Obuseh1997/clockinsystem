import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Injectable()
export class DashboardFirstGuard {
    private firstNavigation = true;
    
    constructor(private router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != DashboardComponent) {
                 this.router.navigateByUrl("/");
                 return false;
            }
        } 
        return true;
    }
}