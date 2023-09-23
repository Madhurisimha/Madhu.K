const accountId = 1234
let accountEmail = "madhu@gmail.com"
var accountPassword = "5468"
// var is not being used anymore. we won't be able to change . let will be more convinent
// const can't be changed at all 
/*
prefer to  ot use var . 
becoz issue in block scope and functional scope 
*/
accountCity = "Gorantla"

accountEmail = "naresh@google.com"
accountPassword = "2345"
accountCity = "banglore"

let accountState;

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
