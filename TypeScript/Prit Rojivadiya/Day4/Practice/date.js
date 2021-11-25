// current data and time
var date = new Date();
console.log(date);
// in milliseconds
date = new Date(5000000000000);
console.log(date);
// date string
date = new Date('2021-11-24');
console.log(date);
// parameters
date = new Date(2021, 4, 10, 17, 24, 55, 10);
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMonth());
date.setMonth(11);
console.log(date);
