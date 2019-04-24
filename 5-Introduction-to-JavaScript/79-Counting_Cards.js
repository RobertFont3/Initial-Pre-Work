//learned how to create a card counting program that would add and remove from a count based on a card value


//
function cc(card) {
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
   count++;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;
      }
      if (count > 0){
        return count + " Bet";
      } else {
        return count + " Hold";
      }
}
