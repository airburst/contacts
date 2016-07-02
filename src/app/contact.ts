export class Contact {
    firstname = '';
    lastname = '';
    line1 = '';
    line2 = '';
    city = '';
    county = '';
    postcode = '';
    email = '';
    tel = '';

    constructor (
        firstname: string,
        lastname: string,
        line1?: string,
        line2?: string,
        city?: string,
        county?: string,
        postcode?: string,
        email?: string,
        tel?: string
    ) {
        this.firstname = '';
        this.lastname = '';
        this.line1 = '';
        this.line2 = '';
        this.city = '';
        this.county = '';
        this.postcode = '';
        this.email = '';
        this.tel = '';
    }
}