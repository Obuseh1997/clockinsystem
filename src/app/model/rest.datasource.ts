import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Staff } from "./staff.model";
import { map, catchError, tap } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";
import axios from "axios";
import { Login } from "./auth.model"

const PROTOCOL = "http";
const PORT = 3500;
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
   


@Injectable()
export class RestDataSource {
baseUrl: string;
auth_token: string;
errorMessage: string;


constructor(private http: HttpClient) {
this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;

 
 
}

signIn(user_id) {
    console.log("Hello World: "+ user_id);

    let headerText = {'Content-Type': 'application/json'};

    axios.post('http://localhost:8080/staff/sign-in.php', 
    {user_id : user_id}, 
        { headers: headerText }
    )
        .then(response =>{
            console.log('here we are');
            console.log(response);
        }
        ).catch(error=>{
            console.log(error);
        });
}

signOut(user_id) {
    console.log("Hello World: "+ user_id);

    let headerText = {'Content-Type': 'application/json'};

    axios.post('http://localhost:8080/staff/sign-out.php', 
    {user_id : user_id}, 
        { headers: headerText }
    ) 
        .then(response =>{
            console.log('here we are');
            console.log(response);
        }
        ).catch(error=>{
            console.log(error);
        });
}


getStaffs(): Observable<Staff[]> {
return this.http.get<Staff[]>(this.baseUrl + "staffs"); 
}


loginAdmin(username: string, password: string): Observable<Login> {
    return this.http.post<Login>('http://192.168.1.29/biometric%20system/admin/admin_login.php',
                                  {username, password},
                                  httpOptions)
          .pipe(
              tap(_ => console.log('logged in')),
              catchError(this.handleError<Login>('loginAdmin'))
          );
}

// loginAdmin(username, password) {
//     console.log("Hello World: "+ username  + password);

//     let headerText = {'Content-Type': 'application/json'};

//     axios.post('http://192.168.1.29/biometric%20system/admin/admin_login.php', 
//     {username, password}, 
//         { headers: headerText }
//     ) 
//         .then(response =>{
//             console.log('here we are');
//             console.log(response);
//         }
//         ).catch(error=>{
//             console.log(error);
//         });

// }

authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + "login", {
    name: user, password: pass
    }).pipe(map(response => {
    this.auth_token = response.success ? response.token : null;
    return response.success;
    }));
    }

saveStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(this.baseUrl + "staffs",
       staff, this.getOptions());
}

updateStaff(staff): Observable<Staff> {
    return this.http.put<Staff>(`${this.baseUrl}/staffs/${staff.id}`,
        staff, this.getOptions());
}

deleteStaff(id: number): Observable<Staff> { 
    return this.http.delete<Staff>(`${this.baseUrl}/staffs/${id}`,
         this.getOptions());
}

 private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
       
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
       
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
       
          // Let the app keep running by returning an empty result.
          return of(result as T);
    };


}

private getOptions() {
    return {
        headers: new HttpHeaders({
            "Authorization": `Bearer ${this.auth_token}`
        })
    };
}
}