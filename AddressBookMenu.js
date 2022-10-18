const AddressBook = require("./AddressBook.js");
const prompt = require('prompt-sync')();

let addressBook = new AddressBook();

flag = true;

while (flag) {

    let userChoice = menu();
    switch (userChoice) {
        case 1:
            addressBook.insert();
            break;
        case 2:
            addressBook.show();
            break;
        case 3:
            let fName = prompt("Enter the first Name to edit Contact details : ");
            addressBook.editContact(fName);
            break;
        case 4:
            let pName = prompt("Enter the first Name to delete Contact details : ");
            addressBook.deleteContact(pName);
            break;
        case 5:
            console.log("Number of contacts in address book are : " + addressBook.contactInfoList.length);
            break;
        case 6:
            console.log("EXITED !!!");
            flag = false;
            break;
        default:
            console.log("You have entered invalid input!");
            break;
    }
}


function menu() {
    console.log("Press 1 - To insert new contact");
    console.log("Press 2 - To display details");
    console.log("Press 3 - To edit contact details");
    console.log("Press 4 - To delete contact")
    console.log("Press 5 - To get count of contacts in address book")
    console.log("Press 6 - To exit");
    return parseInt(prompt("Enter your choice : "));
}