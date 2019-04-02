export class Staff {

    constructor(
        public id?: number,
        public firstname?: string,
        public lastname?: string,
        public middlename?: string,
        public dob?: Date,
        public gender?: string,
        public marital?: string,
        public address?: string,
        public phone?: number,
        public joinedDate?: Date,
        public department?: string,
        public role?: string,
        public employmentType?: string,
        public createdBy?: string,
        public time_in?: null,
        public time_out?: null) { }
}