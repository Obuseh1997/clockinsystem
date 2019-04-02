import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";
import { HttpClient } from "@angular/common/http";

interface myData {
    success: boolean,
    message: string
}

@Injectable()
export class AuthService {

    private loggedInStatus = false

    constructor(private datasource: RestDataSource,
                private http: HttpClient) {}  
    
    setLoggedIn(value: boolean) {
        this.loggedInStatus = value
    }
    getUserDetails(username, password) {
        // post details to API server and return user info if correct
        return this.http.post<myData>('http://localhost/api/admin/admin_login.php',
                               {username,
                                password
                             })
    }

    // logIn(username: string, password: string,)  {
    //     return this.datasource.loginAdmin(username, password);
    // }

    authenticate(username: string, password: string): Observable<boolean> {
        return this.datasource.authenticate(username, password);
    }

    get isLoggedin() {
       return this.loggedInStatus   
    }


    get authenticated(): boolean {
        return this.datasource.auth_token != null;
    }
    clear() {
        this.datasource.auth_token = null;
    }


}