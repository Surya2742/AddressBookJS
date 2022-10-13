class ContactDetails {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor (firstName,lastName,address,city,state,zip,phoneNumber,email){
        firstName = this.firstName;
        lastName = this.lastName;
        address = this.address;
        city = this.city;
        state = this.state;
        zip = this.zip;
        phoneNumber = this.phoneNumber;
        email = this.email;
    }
    
    // getters and setters
    get firstName() {
        return firstName;
    }
   
    set firstName(firstName) {
        firstName = this.firstName;
    }

    get lastName() {
        return lastName;
    }
    
    set lastName(lastName) {
        lastName = this.lastName;
    }

    get address() {
        return address;
    }
   
    set address(address) {
        address = this.address;
    }

    get city() {
        return city;
    }
   
    set city(city) {
        city = this.city;
    }

    get state() {
        return state;
    }
   
    set state(state) {
        state = this.state;
    }

    get zip() {
        return zip;
    }
   
    set zip(zip) {
        zip = this.zip;
    }

    get phoneNumber() {
        return phoneNumber;
    }
   
    set phoneNumber(phoneNumber) {
        phoneNumber = this.phoneNumber;
    }

    get email() {
        return email;
    }
   
    set email(email) {
        email = this.email;
    }

    toString() {
        return "firstName = " +this.firstName + ", lastName = " +this.lastName + ", address = " +this.address + ", city = " +this.city +
                                ", state = " +this.state + ", zip = " +this.zip + ", phoneNumber = " +this.phoneNumber + ", email = " +this.email;
    }


}

module.exports = ContactDetails;