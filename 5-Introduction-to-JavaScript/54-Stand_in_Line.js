//created a queue using push and shift to add an item at the end of a list as a item is removed from the front of the myList


function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return removed;  // Change this line
}
