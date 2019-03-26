export class Staff {

    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public middleName?: string,
        public dob?: Date,
        public gender?: string,
        public joinedDate?: Date,
        public department?: string,
        public role?: string,
        public time_in?: null,
        public time_out?: null) { }
}