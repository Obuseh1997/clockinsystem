export class Staff {

    constructor(
        public id?: number,
        public firstname?: string,
        public lastname?: string,
        public middlename?: string,
        public dob?: Date,
        public gender?: string,
        public marital_status?: string,
        public home_address?: string,
        public phone_number?: number,
        public joinedfirmdate?: Date,
        public department_name?: string,
        public employment_type?: string,
        public pin?: number,
        public time_in?: string,
        public time_out?: string) { }
}