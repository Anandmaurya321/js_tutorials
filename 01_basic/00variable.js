const accountId=1283;
let emailId="iliveinindia134@gmail.com" // has scope
var city="Varanasi" // do not have scope
accountState="Utter Pradesh" // we can also define variable like that
//accountId=24;// cannot change
let place
console.log(accountId)
console.table([accountId,emailId,city,accountState,place])
emailId="abc@gmail.com";

city="chandauli"
accountState="Gorakhpur"
/*
Do not use var for defining variables because it do not have any scope
*/
console.table([accountId,emailId,city,accountState,place])