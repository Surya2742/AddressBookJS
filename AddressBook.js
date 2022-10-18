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

    show() {
        console.log(this.contactInfoList);
    }

    editContact(fname) {
        this.contactInfoList.forEach(element => {
            if ((element.fName == fname) == true) {
                console.log("Contact Found : ");
                console.log(element);
                console.log("Press 1 to edit Last Name");
                console.log("Press 2 to edit Address");
                console.log("Press 3 to edit City")
                console.log("Press 4 to edit State");
                console.log("Press 5 to edit Zip");
                console.log("Press 6 to edit Phone Number");
                console.log("Press 7 to edit Email");
                let option = parseInt(prompt("Enter your choice : "));
                let contactInfo = new ContactDetails();

                switch (option) {
                    case 1:
                        contactInfo.lName = prompt("Enter Last Name : ");
                        element.lName = contactInfo.lName;
                        break;
                    case 2:
                        contactInfo.add = prompt("Enter Address : ");
                        element.add = contactInfo.add;
                        break;
                    case 3:
                        contactInfo.cityName = prompt("Enter City : ");
                        element.cityName = contactInfo.cityName;
                        break;
                    case 4:
                        contactInfo.stateName = prompt("Enter State : ");
                        element.stateName = contactInfo.stateName;
                        break;
                    case 5:
                        contactInfo.zipCode = prompt("Enter Zip : ");
                        element.zipCode = contactInfo.zipCode;
                        break;
                    case 6:
                        contactInfo.pNumber = prompt("Enter Phone Number : ");
                        element.pNumber = contactInfo.pNumber;
                        break;
                    case 7:
                        contactInfo.eMail = prompt("Enter Email : ");
                        element.eMail = contactInfo.eMail;
                        break;
                    default:
                        console.log("You have entered invalid input!");
                        break;
                }
            }
            else {
                console.log("Contact not Found.");
            }
        });
    }

    deleteContact(fname) {
        this.contactInfoList.forEach(element => {
            if ((element.fName == fname)) {
                let index = this.contactInfoList.indexOf(fname);
                this.contactInfoList.splice(index, 1);
                console.log("Contact Deleted.");
            }
            else {
                console.log("Contact not Found.");
            }
        });
    }
}
module.exports = AddressBook;