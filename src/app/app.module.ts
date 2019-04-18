import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardModule } from "./dashboard/dashboard.module";
import { DashboardComponent } from "./dashboard/dashboard.component"
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { DashboardFirstGuard } from "./dashboardFirst.guard";

 




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DashboardModule,
    RouterModule.forRoot([
      { 
        path: "dashboard", component: DashboardComponent,
        canActivate: [DashboardFirstGuard]
       }, 


      { 
        path: "admin", 
        loadChildren: "./admin/admin.module#AdminModule",
        canActivate: [DashboardFirstGuard]
      },

      {
        path: "login",
        loadChildren: './login/login.module#LoginModule',
        canActivate: [DashboardFirstGuard]
      },

    
      { 
        path: "**", redirectTo: "/dashboard" 
      },
    ])],
  providers: [DashboardFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
