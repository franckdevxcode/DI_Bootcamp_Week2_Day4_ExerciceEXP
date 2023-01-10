// ============ Exercice 1 ==============
// Part 1
function infoAboutMe() {
  console.log("Je suis DIBY FRANCK MICHAEL j'ai 30 ans et j'aime le Footbal");
}
infoAboutMe();
// Part 2
function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(
    `You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`
  );
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// ============ Exercice 2 ==============
function calculateTip() {
  var amount = Number(prompt("Amount of the bill"));
  if (amount < 50) {
    var tip = (amount * 20) / 100;
  }
  if (amount >= 50 && amount <= 200) {
    var tip = (amount * 15) / 100;
  }
  if (amount > 200) {
    var tip = (amount * 10) / 100;
  }
  console.log(`tip: ${tip}. final bill : ${amount + tip}`);
}
// calculateTip();
// ============ Exercice 3 ==============
var divisible = "";
var sum = 0;
function isDivisible() {
  for (let index = 0; index < 501; index++) {
    if (index % 23 == 0) {
      //   console.log(index);
      divisible += index + " ";
      sum += index;
    }
  }
  console.log(`Outcome ${divisible}`);
  console.log(`Sum ${sum}`);
}
isDivisible();
// BONUS
function isDivisible(divisor) {
  for (let index = 0; index < 501; index++) {
    if (index % divisor == 0) {
      //   console.log(index);
      divisible += index + " ";
      sum += index;
    }
  }
  console.log(
    `${divisible} the numbers  divisible by ${divisor} and their sum  is ${sum} `
  );
}

// ============ Exercice 4 ==============
// 1
const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

// 2
var shoppingList = ["banana", "orange", "apple"];

// 3
function myBill() {
  var total_price = 0;
  for (const el in prices) {
    if (shoppingList.includes(el)) {
      total_price += prices[el];
    }
  }
  console.log(total_price);
}
myBill();

// BONUS
function myBillBonus() {
  for (const el in prices) {
    if (shoppingList.includes(el)) {
      prices[el] = prices[el] - 1;
    }
  }
  console.log(prices);
}
myBillBonus();

// ============ Exercice 5 ==============
// 1 et 2
function changeEnough(itemPrice, amountOfChange) {
  var totalAmoutChange = 0;
  for (let val of amountOfChange) {
    totalAmoutChange += val;
  }
  if (totalAmoutChange >= itemPrice) {
    return true;
  } else {
    return false;
  }
}
// 3, 4
console.log(changeEnough(4.25, [25, 20, 5, 0]));

// ============ Exercice 6 ==============
// 1
function hotelCost() {
  var nbreNuit = Number(prompt("Combien de nuits souhaitez vous passer"));
  while (nbreNuit == 0 || isNaN(nbreNuit)) {
    var nbreNuit = Number(prompt("Combien de nuits souhaitez vous passer"));
  }
  const prixHotel = 140;
  return prixHotel;
}
// 2
function planeRideCost() {
  var destination = prompt("Quelle est votre destination");
  while (destination.length == 0 || !isNaN(destination)) {
    var destination = prompt("Quelle est votre destination");
  }
  switch (destination) {
    case "London":
      return 183;
      break;
    case "Paris":
      return 220;
      break;
    default:
      return 300;
      break;
  }
}
3;
function rentalCarCost() {
  var locationJours = Number(prompt("Nombre de jour de location"));
  while (locationJours == 0 || isNaN(locationJours)) {
    var locationJours = Number(prompt("Nombre de jour de location"));
  }
  var cout_total = locationJours * 40;
  if (locationJours > 10) {
    cout_total = cout_total + (cout_total * 5) / 100;
  }
  return cout_total;
}

// 4
function vacation() {
  var TheCost = rentalCarCost();
  var theHostel = hotelCost();
  var thePlane = planeRideCost();

  var myVacation = `The car cost : ${TheCost} the hotel cost : ${theHostel}, th plane ticket cost : ${thePlane}`;
  return myVacation;
}
// 5
vacation();
