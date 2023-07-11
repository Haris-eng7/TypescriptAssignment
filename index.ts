var person_name = "Haris Naeem";

//Question 2
console.log(
  `Hello ${person_name}, would you like to learn some Typescript today?`
);

//Question 3
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());

function titleCase(pName: string) {
  const newStr = pName.toLowerCase().split(" ");
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
  }
  return newStr.join(" ");
}

console.log(titleCase(person_name));

//Question 4

console.log(
  "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
);

//Question 5 (and it has the comment for question 10)

//Program written by Haris Naeem on 7-july-2023
/* In this program, i had displayed the quote of a famous person by storing the name of the person in famous_person variable
 his quote in a message variable */
const famous_person = "Albert Einstein";
const message = "“A person who never made a mistake never tried anything new.”";

console.log(`${famous_person} once said, ${message}`);

//Question 6

const Name = "\t Haris Naeem \t";

console.log(Name);

//Question 7 & 8

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

//Question 9 (and it has the comment for question 10)
//Program written by Haris Naeem on 7-july-2023
/* In this program, i had stored my favourite number in a variable and displayed it inside the message variable */

const fav_num = 7;

const message_fav_num = `My favourite Number is ${fav_num} `;

console.log(message_fav_num);

//Question 11

const names = ["Noman", "Imran", "Ashir", "Zain", "Ahmed"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//Question 12

for (let i = 0; i < names.length; i++) {
  console.log(`Hello ${names[i]}`);
}

//Question 13
const ownArr = ["Honda Bike", "Toyota Corolla", "Airplane"];

for (let i = 0; i < ownArr.length; i++) {
  if (ownArr[i] == "Honda Bike") {
    console.log(
      `I would like to travel to northeren areas of Pakistan on my ${ownArr[i]}`
    );
  } else if (ownArr[i] == "Toyota Corolla") {
    console.log(`My favourite car for transportation is ${ownArr[i]} `);
  } else {
    console.log(`i love travelling to big cities in ${ownArr[i]} `);
  }
}

//Question 14 - 15

const guests = ["Noman", "Imran", "Ashir"];
for (let i = 0; i < guests.length; i++) {
  if (guests[i] == "Noman") {
    console.log(
      `Hello ${guests[i]}, i would like to invite you to dinner at my home tomorrow`
    );
  } else if (guests[i] == "Imran") {
    console.log(
      `Hi ${guests[i]}, will you be available for a dinner with me tomorrow? `
    );
  } else {
    console.log(
      `Good evening ${guests[i]}. Are you available tomorrow for a dinner? `
    );
  }
}

for (let i = 0; i < guests.length; i++) {
  if (guests[i] == "Ashir") {
    console.log(`${guests[i]} is not available for dinner tomorrow.`);
  }
}

for (let i = 0; i < guests.length; i++) {
  if (guests[i] == "Ashir") {
    guests.splice(i, 1, "Zain");
  }
}

console.log(guests);

for (let i = 0; i < guests.length; i++) {
  console.log(`Thanks ${guests[i]} for confirming of your availability!`);
}

//Question 16

console.log("I have found a big dinner table!");

guests.unshift("Ahmad");
guests.splice(Math.floor(guests.length / 2), 0, "Awais");
guests.push("Hamza");
console.log(guests);

//Question 17

console.log(
  "For some Reasons, the dinner table is not available for the scheduled time. I have space for two guest only."
);

console.log(guests.length);

console.log(
  `Sorry ${guests[guests.length - 1]}, i cannot invite you on dinner.`
);
guests.pop();

console.log(
  `Sorry ${guests[guests.length - 1]}, i cannot invite you on dinner.`
);
guests.pop();
console.log(
  `Sorry ${guests[guests.length - 1]}, i cannot invite you on dinner.`
);
guests.pop();
console.log(
  `Sorry ${guests[guests.length - 1]}, i cannot invite you on dinner.`
);
guests.pop();

for (let name in guests) {
  console.log(`Hey ${guests[name]}, you are still invited on the dinner`);
}

guests.pop();
guests.pop();

console.log(guests);

//Question 18

const locations = ["Switzerland", "America", "Austria", "France", "Spain"];

console.log(locations);

const alphabetical_order = [...locations];

alphabetical_order.sort();
console.log(alphabetical_order);
console.log(locations);

alphabetical_order.reverse();

console.log(alphabetical_order);

console.log(alphabetical_order.reverse());

console.log(locations.sort());

console.log(locations.reverse());

//Question 19

console.log(`I am now inviting ${guests.length} people on dinner tomorrow`);

//Question 20

const rivers_arr = ["Ravi", "Jhelum", "Chenab", "Indus", "Sindh"];

//Question 21
const details = {
  rivers: ["Ravi", "Jhelum", "Chenab", "Indus", "Sindh"],
  mountains: ["K2", "Nanga Parbat", "Mount Everest", "Broad Peak"],
  countries: ["Pakistan", "England", "Canada", "America", "Spain"],
  languages: ["Urdu", "English", "French", "Dutch", "German"],
  cities: ["Islamabad", "New York", "Calgary", "London", "Barcelona"],
};

console.log(details.rivers);
//Question 22 (Fixed in Question 3)

//Question 23

let car = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");

let animal_name = "camel";
console.log("Is animal name == 'camel'? true ");
console.log(animal_name == "camel");

//Question 24

//Question 25

let alien_color = "Green";

if (alien_color == "Green" || alien_color == "green") {
  console.log("The player earned 5 points!");
}

alien_color = "Yellow";
if (alien_color == "Green" || alien_color == "green") {
  console.log("The player earned 5 points!");
} else {
}

//Question 26

alien_color = "green";

if (alien_color == "Green" || alien_color == "green") {
  console.log("The player earned 5 points for shooting the alien!");
} else {
  console.log("The player just earned 10 points!");
}

alien_color = "yellow";

if (alien_color == "Green" || alien_color == "green") {
  console.log("The player earned 5 points for shooting the alien!");
} else {
  console.log("The player just earned 10 points!");
}

//Question 27

alien_color = "green";
if (alien_color == "Green" || alien_color == "green") {
  console.log("The player earned 5 points!");
} else if (alien_color == "Yellow" || alien_color == "yellow") {
  console.log("The player just earned 10 points!");
} else if (alien_color == "Red" || alien_color == "red") {
  console.log("The player just earned 15 points!");
}

alien_color = "yellow";

if (alien_color == "Green" || alien_color == "green") {
  console.log("The player earned 5 points!");
} else if (alien_color == "Yellow" || alien_color == "yellow") {
  console.log("The player just earned 10 points!");
} else if (alien_color == "Red" || alien_color == "red") {
  console.log("The player just earned 15 points!");
}

alien_color = "Red";

if (alien_color == "Green" || alien_color == "green") {
  console.log("The player earned 5 points!");
} else if (alien_color == "Yellow" || alien_color == "yellow") {
  console.log("The player just earned 10 points!");
} else if (alien_color == "Red" || alien_color == "red") {
  console.log("The player just earned 15 points!");
}

//Question 28

let age = 2;

if (age < 2) {
  console.log("The person is a baby");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager");
} else if (age >= 20 && age < 65) {
  console.log("The person is a adult");
} else if (age >= 65) {
  console.log("The person is a elder");
}

//Question 29

const favourite_fruits = ["Cherry", "Mango", "Grapes"];

for (let i = 0; i < 5; i++) {
  if (favourite_fruits[i] == "Banana") {
    console.log(`You really like Banana`);
  } else if (favourite_fruits[i] == "Cherry") {
    console.log("You really like cherry");
  } else if (favourite_fruits[i] == "Apple") {
    console.log("You really Like Apple");
  } else if (favourite_fruits[i] == "Grapes") {
    console.log("You really like Grapes");
  } else if (favourite_fruits[i] == "Mango") {
    console.log("You really like mangoes");
  }
}

//Question 30

const usernames = [
  "admin",
  "haris-eng7",
  "imran786",
  "noman3557",
  "shopifydev7",
];

for (let name of usernames) {
  if (name == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${name}, thank you for logging in again.`);
  }
}

//Question 31

if (usernames.length > 0) {
} else {
  console.log("We need to find some users");
}

usernames.shift();
usernames.shift();
usernames.shift();
usernames.shift();
usernames.shift();

console.log(usernames);

if (usernames.length > 0) {
} else {
  console.log("We need to find some users");
}

//Question 32

const current_users = [
  "admin",
  "hariseng7",
  "imran786",
  "noman3557",
  "shopifydev7",
  "eng7",
];

const new_users = ["ashir123", "ahmadali", "admin", "hariseng7", "imran123"];

new_users.forEach((user: string) => {
  console.log(user);
  if (current_users.includes(user)) {
    console.log("User found");
  } else {
    console.log("USer not found");
  }
});

// //Question 33

// const ordinal_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let num = 1; num <= ordinal_nums.length; num++) {
//   if (num == 1) {
//     console.log("1st");
//   } else if (num == 2) {
//     console.log("2nd");
//   } else if (num == 3) {
//     console.log("3rd");
//   } else {
//     console.log(`${num}th`);
//   }
// }

// //Question 34

// const fav_pizzas = ["Crown Crust", "Chicken Tikka", "Creamy Melt"];

// for (let pizza in fav_pizzas) {
//   console.log(fav_pizzas[pizza]);
// }

// console.log(
//   "I like pizza very much. I am in love with Crown crust pizza from Cheezious but the Creamy Melt from Pizza Hut is good too!"
// );

// //Question 35
