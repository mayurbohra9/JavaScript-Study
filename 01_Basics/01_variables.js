const accountId = 123
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"

accountCity = " Indore"

let accountState;  //undefined

// accountId = 2  //not allowed

accountEmail = "gef@gmail.com"
accountPassword = "67890"

accountCity = "Pune"

// console.log(accountId);

console.table([accountId,accountEmail,accountPassword, accountCity, accountState]);

/*
    Prefer not to use var 
    because of issue in block scope and functional scope
*/

