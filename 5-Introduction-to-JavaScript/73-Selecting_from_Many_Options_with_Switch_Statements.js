function caseInSwitch(num) {//had to change caseInSwitch(val) to (num)
  var answer = "";
  // Only change code below this line

 switch(num) {
 case 1://didnt realize how literal the language was when it came to this example when called a caseInSwitch
 return "alpha";
 break;
 case 2:
 return "beta";
 break;
 case 3:
 return "gamma";
 break;
 case 4:
 return "delta";
break;
 }
  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
