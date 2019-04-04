import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Staff } from "./staff.model";
import { map, catchError, tap } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";
import axios from "axios";
import { Data } from '@angular/router';


const PROTOCOL = "http";
const PORT = 3500;
interface myData {
    success: boolean,
    message: string
}
   


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
return this.http.get<Staff[]>('http://localhost:8080/api/dashboard/dashboard.php'); 
}


// loginAdmin(username: string, password: string): Observable<Login> {
//     return this.http.post<Login>('http://localhost:8080/api/admin/admin_login.php',
//                                   {username, password},
//                                   httpOptions)
//           .pipe(
//               tap(data=> console.log('logged in ', data)),
//               catchError(this.handleError<Login>('loginAdmin'))
//           );
// }

loginAdmin(username, password, callback) {
    console.log("Hello World: "+ username  + password);
 
    let headerTxt = { 'Content-Type': 'application/json' };
 
    axios.post<myData>('http://localhost:8080/api/admin/admin_login.php',
    {username, password},
    {headers: headerTxt}
)
        .then(response =>{
            console.log('here we are');
            console.log(response);
            callback(response);
             
             
        }
        ).catch(error=>{
            console.log(error);
            callback(error);
        
        });
 
 } 
//  getUserDetails(username, password)  {
//     // post details to API server and return user info if correct
//     return this.http.post('http://localhost:8080/api/admin/admin_login.php',
//                            {username,
//                             password
//                          }, this.newOptions());
// }
// authenticate(user: string, pass: string): Observable<boolean> {

//     return this.http.post<any>('http://localhost:8080/api/admin/admin_login.php', {
//     name: user, password: pass},
//     this.newOptions()).pipe(map(response => {
//     this.auth_token = response.success ? response.token : null;
//     return response.success;
//     }));
//     }

saveStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>("http://localhost:8080/api/dashboard/add_employee.php",
       staff, this.newOptions());
}

updateStaff(staff): Observable<Staff> {
    return this.http.put<Staff>("http://localhost:8080/api/dashboard/add_employee.php",
        staff, this.newOptions());
}

deleteStaff(id: number): Observable<Staff> { 
    return this.http.delete<Staff>("http://localhost:8080/api/dashboard/add_employee.php/${id}",
      this.newOptions());
}

//  private handleError<T> (operation = 'operation', result?: T) {
//         return (error: any): Observable<T> => {
       
//           // TODO: send the error to remote logging infrastructure
//           console.error(error); // log to console instead
       
//           // TODO: better job of transforming error for user consumption
//           console.log(`${operation} failed: ${error.message}`);
       
//           // Let the app keep running by returning an empty result.
//           return of(result as T);
//     };


// }

private getOptions() {
    return {
        headers: new HttpHeaders({
            "Authorization": `Bearer <${this.auth_token}>`
        })
    }
}
private newOptions() {
    return {
        headers: new HttpHeaders({
            "Content-type": "application/json"
        })
    }
}
}