/*Usernames can only use alpha-numeric characters.
The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let userName="B5"



checkUsername= /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
console.log(checkUsername.test(userName));