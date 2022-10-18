class ContactDetails {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor (...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    
    get fName() {
        return this.firstName;
    }
   
    set fName(firstName) {
        let regex = RegExp('[A-Z][a-z]{3,}');
        if (regex.test(firstName)) {
            this.firstName = firstName;
        }
        else {
            throw "Incorrect First Name !!!";
        }
    }

    get lName() {
        return this.lastName;
    }
    
    set lName(lastName) {
        let regex = RegExp('[A-Z][a-z]{3,}');
        if (regex.test(lastName)) {
            this.lastName = lastName;
        }
        else {
            throw "Incorrect Last Name !!!";
        }
    }

    get add() {
        return this.address;
    }
   
    set add(address) {
        let regex = RegExp('[A-Z][a-z]{4,}');
        if ( regex.test( address )) {
            this.address = address;
        }
        else {
            throw "Incorrect Address !!!";
        }
    }

    get cityName() {
        return this.city;
    }
   
    set cityName(city) {
        let regex = RegExp('[A-Z][a-z]{4,}');
        if ( regex.test( city )) {
            this.city = city;
        }
        else {
            throw "Incorrect City Name !!!";
        }
    }

    get stateName() {
        return this.state;
    }
   
    set stateName(state) {
        let regex = RegExp('[A-Z][a-z]{4,}');
        if ( regex.test( state )) {
            this.state = state;
        }
        else {
            throw "Incorrect State Name !!!";
        }
    }

    get zipCode() {
        return this.zip;
    }
   
    set zipCode(zip) {
        let regex = RegExp('[0-9]{3,6}');
        if ( regex.test( zip )) {
            this.zip = zip;
        }
        else {
            throw "Incorrect Zip Number !!!";
        }
    }

    get pNumber() {
        return this.phoneNumber;
    }
   
    set pNumber(phoneNumber) {
        let regex = RegExp('[6-9][0-9]{9}');
        if ( regex.test( phoneNumber.split('\n') )) {
            this.phoneNumber = phoneNumber;
        }
        else {
            throw "Incorrect phone number !!!";
        }
    }

    get eMail() {
        return this.email;
    }
   
    set eMail(email) {
        let regex = RegExp('^[a-zA-Z0-9]{1,}[.+-]?[a-zA-Z0-9]{1,}?[@][a-zA-Z0-9]{1,}([.][a-zA-Z]{2,}){1,2}$');
        if ( regex.test( email )) {
            this.email = email;
        }
        else {
            throw "Incorrect email address !!!";
        }
    }

    toString() {
        return "firstName = " +this.firstName + ", lastName = " +this.lastName + ", address = " +this.address + ", city = " +this.city +
                                ", state = " +this.state + ", zip = " +this.zip + ", phoneNumber = " +this.phoneNumber + ", email = " +this.email;
    }

    
}

module.exports = ContactDetails;