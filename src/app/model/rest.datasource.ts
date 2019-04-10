import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Staff } from "./staff.model";
import { map, catchError, tap } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";
import axios from "axios";
import { Department } from "./dep.model"


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
return this.http.get<Staff[]>('http://localhost:8080/api/dashboard/dashboard.php',
                               this.newOptions())
                .pipe(
                    tap(data=> console.log('logged in ', data)),
                    catchError(this.handleError<Staff[]>('getStaffs'))
                ); 
}

getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>('http://localhost:8080/api/dashboard/view_departments.php',
                                   this.newOptions())
                    .pipe(
                        tap(data=> console.log('logged in ', data)),
                        catchError(this.handleError<Staff[]>('getDepartment'))
                    ); 
    }

getStaffInfo(): Observable<Staff[]> {
    return this.http.get<Staff[]>('http://localhost:8080/api/admin/admin_dashboard.php',
                                   this.newOptions())
                    .pipe(
                        tap(data=> console.log('logged in ', data)),
                        catchError(this.handleError<Staff[]>('getStaffs'))
                    ); 
    }

sendDate(dateSelected: Date) {
    return this.http.post('api',
                          dateSelected,
                          this.newOptions())
                          .pipe(
                            tap(data=> console.log('logged in ', data)),
                            catchError(this.handleError('sendDate'))
                        ); 

}

clockIn(pin: number, callback) {
    console.log('Hello World' + pin);
    let headerTxt = { 'Content-Type': 'application/json' };

    axios.post('http://localhost:8080/api/dashboard/employee_auth.php', {pin}, {headers: headerTxt})
     .then(response =>{
           console.log(response);
           callback(response);
           
}
     ).catch(error=>{
         console.log(error);
         callback(error);
     })
 }

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


saveStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>("http://localhost:8080/api/dashboard/add_employee.php",
       staff, this.newOptions())
       .pipe(
        tap(data=> console.log('logged in ', data)),
        catchError(this.handleError<Staff>('saveStaff'))
    );;
}

updateStaff(staff): Observable<Staff> {
    return this.http.put<Staff>("http://localhost:8080/api/dashboard/update_employee.php",
        staff, this.newOptions())
        .pipe(
            tap(data=> console.log('logged in ', data)),
            catchError(this.handleError<Staff>('updateStaff'))
        );;
}

deleteStaff(id: number): Observable<Staff> { 
    return this.http.delete<Staff>("http://localhost:8080/api/dashboard/delete.php/"+ id,
      this.newOptions())
      .pipe(
        tap(data=> console.log('logged in ', data)),
        catchError(this.handleError<Staff>('deleteStaff'))
    );;
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

private newOptions() {
    return {
        headers: new HttpHeaders({
            "Content-type": "application/json"
        })
    }
}

}