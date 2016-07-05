export interface IContact {
    firstname?: string,
    lastname?: string,
    line1?: string,
    line2?: string,
    city?: string,
    county?: string,
    postcode?: string,
    email?: string,
    tel?: string
}

export class Contact {
    constructor(public firstname?: string, public lastname?: string ) {
        this.firstname = firstname || '';
        this.lastname = lastname || '';
    }
    line1: string;
    line2: string;
    city: string;
    county: string;
    postcode: string;
    email: string;
    tel: string;
}