let score = "23ab"

console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber); // number 
// console.log(valueInNumber); // NaN  when score is 3abc
// if score is null  , value is 0  . if it's undefined then it's NaN

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)

console.log(booleanisLoggedIn); // true or false 

// 1=>  booleanvalue is true , 0=> false 
// "" => false 
// "Madhu" => true , even value added in the string  , it gives true 

let someNumber = 20
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);// string 




