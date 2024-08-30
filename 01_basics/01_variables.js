const aacountId = 11223
let accountEmail = "raj@gmail.com"
var accountPassword = "12345"
accountCity = "kolkata"
let accountState;

// aacountId = 2 // not allowed

console.log(aacountId);

/*
prefer not to use var
because of issues in block scope and functional scope
*/

accountEmail = "gfh@gmail.com"
accountPassword = "753364"
accountCity = "Mumbai"

console.table([aacountId,accountEmail,accountPassword,accountCity,accountState]);

