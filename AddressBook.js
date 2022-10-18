const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();

class AddressBook {
    contactInfoList = new Array();
    insert() {
        try {
            var contactInfo = new ContactDetails();
            contactInfo.fName = prompt("Enter First Name : ");
            contactInfo.lName = prompt("Enter Last Name : ");
            contactInfo.add = prompt("Enter Address : ");
            contactInfo.cityName = prompt("Enter City : ");
            contactInfo.stateName = prompt("Enter State : ");
            contactInfo.zipCode = prompt("Enter Zip : ");
            contactInfo.pNumber = prompt("Enter Phone Number : ");
            contactInfo.eMail = prompt("Enter Email : ");
            this.contactInfoList.push(contactInfo);
        } catch (e) {
            console.error(e);
        }
    }

    show () {
        console.log(this.contactInfoList);
    }


}
module.exports = AddressBook;