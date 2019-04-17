import { NgModule } from "@angular/core";
import { StaffRepository } from "./staff.repository";
import { AdminRepository } from "./admin.repository";
import { StaticDataSource } from "./static.datasource";
import { ReportRepository} from "./report.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [StaffRepository, AdminRepository, ReportRepository,
        { provide: StaticDataSource, useClass: RestDataSource },
          RestDataSource, AuthService]
})
export class ModelModule { }