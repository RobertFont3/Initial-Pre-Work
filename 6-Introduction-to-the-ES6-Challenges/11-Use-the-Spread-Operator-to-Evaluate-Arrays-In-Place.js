/*used the spread value to evaluate arrays*/


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; //used instead of Math as that is used for numbers
})();
console.log(arr2);
