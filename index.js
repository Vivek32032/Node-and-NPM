const moment = require("moment");
const _ = require("lodash");


console.log(moment().format('dddd'));                    // Tuesday
console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // January 18th 2022, 10:40:12 pm
console.log(moment().format("MMM Do YY"));               // Jan 18th 22


function dateCheck (dateFormat){
   var utc = moment(dateFormat, "YYYY-MM-DD", true)
   var isUTC = utc.isValid(dateFormat);
   console.log(isUTC);
}

dateCheck("2020-01-01");
dateCheck("2020-14-01");

console.log(moment().add(7, 'days').calendar());      
console.log(moment().add(7, 'months').calendar());      
console.log(moment().add(7, 'years').calendar());      

console.log(moment().subtract(7, 'days').calendar()); 
console.log(moment().subtract(7, 'months').calendar());      
console.log(moment().subtract(7, 'years').calendar());      

let date1= moment("2014-11-11");
let date2= moment("2015-09-11");
console.log(date2.diff(date1, "days"));


let date3= moment("2014-11-27");
let date4= moment("2015-09-16");
console.log(date4.diff(date3, "days"));



console.log(moment('2020-01-01').isAfter('2018-01-01')); // true
console.log(moment('2010-01-01').isAfter('2018-01-01')); // true
console.log(moment("2019").isLeapYear());
console.log(moment("2020").isLeapYear());


//lodash methods


var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
 
console.log(array);

//second

console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
 
console.log(_.chunk(['a', 'b', 'c', 'd'], 3));

//third

console.log(_.compact([0, 1, false, 2, '', 3]));


//drop

console.log(_.drop([1, 2, 3]));
// => [2, 3]
 
console.log(_.drop([1, 2, 3], 2));
// => [3]
 
console.log(_.drop([1, 2, 3], 5));
// => []
 
console.log(_.drop([1, 2, 3], 0));