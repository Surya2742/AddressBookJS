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
    console.log("Press 4 - To exit");
    return parseInt(prompt("Enter your choice : "));
}