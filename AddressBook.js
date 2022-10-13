const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();
var contactInfo = new ContactDetails();

contactInfo.firstName = "Surya";
contactInfo.lastName = "Vishwakarma";
contactInfo.address = "Jhagadia";
contactInfo.city = "Bharuch";
contactInfo.state = "Gujarat";
contactInfo.zip = "393110";
contactInfo.phoneNumber = "8793187950";
contactInfo.email = "boby7724284@gmail.com";
console.log(contactInfo.toString());

contactInfo.firstName = prompt("Enter First Name : "); 
contactInfo.lastName = prompt("Enter Last Name : "); 
contactInfo.address = prompt("Enter Address : "); 
contactInfo.city = prompt("Enter City : "); 
contactInfo.state = prompt("Enter State : "); 
contactInfo.zip = prompt("Enter Zip : "); 
contactInfo.phoneNumber = prompt("Enter Phone Number : "); 
contactInfo.email = prompt("Enter Email : "); 
console.log(contactInfo.toString());