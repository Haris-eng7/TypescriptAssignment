var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var person_name = "Haris Naeem";
//Question 2
console.log("Hello ".concat(person_name, ", would you like to learn some Typescript today?"));
//Question 3
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
function titleCase(pName) {
    var newStr = pName.toLowerCase().split(" ");
    for (var i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    }
    return newStr.join(" ");
}
console.log(titleCase(person_name));
//Question 4
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");
//Question 5 (and it has the comment for question 10)
//Program written by Haris Naeem on 7-july-2023
/* In this program, i had displayed the quote of a famous person by storing the name of the person in famous_person variable
 his quote in a message variable */
var famous_person = "Albert Einstein";
var message = "“A person who never made a mistake never tried anything new.”";
console.log("".concat(famous_person, " once said, ").concat(message));
//Question 6
var Name = "\t Haris Naeem \t";
console.log(Name);
//Question 7 & 8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//Question 9 (and it has the comment for question 10)
//Program written by Haris Naeem on 7-july-2023
/* In this program, i had stored my favourite number in a variable and displayed it inside the message variable */
var fav_num = 7;
var message_fav_num = "My favourite Number is ".concat(fav_num, " ");
console.log(message_fav_num);
//Question 11
var names = ["Noman", "Imran", "Ashir", "Zain", "Ahmed"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Question 12
for (var i = 0; i < names.length; i++) {
    console.log("Hello ".concat(names[i]));
}
//Question 13
var ownArr = ["Honda Bike", "Toyota Corolla", "Airplane"];
for (var i = 0; i < ownArr.length; i++) {
    if (ownArr[i] == "Honda Bike") {
        console.log("I would like to travel to northeren areas of Pakistan on my ".concat(ownArr[i]));
    }
    else if (ownArr[i] == "Toyota Corolla") {
        console.log("My favourite car for transportation is ".concat(ownArr[i], " "));
    }
    else {
        console.log("i love travelling to big cities in ".concat(ownArr[i], " "));
    }
}
//Question 14 - 15
var guests = ["Noman", "Imran", "Ashir"];
for (var i = 0; i < guests.length; i++) {
    if (guests[i] == "Noman") {
        console.log("Hello ".concat(guests[i], ", i would like to invite you to dinner at my home tomorrow"));
    }
    else if (guests[i] == "Imran") {
        console.log("Hi ".concat(guests[i], ", will you be available for a dinner with me tomorrow? "));
    }
    else {
        console.log("Good evening ".concat(guests[i], ". Are you available tomorrow for a dinner? "));
    }
}
for (var i = 0; i < guests.length; i++) {
    if (guests[i] == "Ashir") {
        console.log("".concat(guests[i], " is not available for dinner tomorrow."));
    }
}
for (var i = 0; i < guests.length; i++) {
    if (guests[i] == "Ashir") {
        guests.splice(i, 1, "Zain");
    }
}
console.log(guests);
for (var i = 0; i < guests.length; i++) {
    console.log("Thanks ".concat(guests[i], " for confirming of your availability!"));
}
//Question 16
console.log("I have found a big dinner table!");
guests.unshift("Ahmad");
guests.splice(Math.floor(guests.length / 2), 0, "Awais");
guests.push("Hamza");
console.log(guests);
//Question 17
console.log("For some Reasons, the dinner table is not available for the scheduled time. I have space for two guest only.");
console.log(guests.length);
console.log("Sorry ".concat(guests[guests.length - 1], ", i cannot invite you on dinner."));
guests.pop();
console.log("Sorry ".concat(guests[guests.length - 1], ", i cannot invite you on dinner."));
guests.pop();
console.log("Sorry ".concat(guests[guests.length - 1], ", i cannot invite you on dinner."));
guests.pop();
console.log("Sorry ".concat(guests[guests.length - 1], ", i cannot invite you on dinner."));
guests.pop();
for (var name_1 in guests) {
    console.log("Hey ".concat(guests[name_1], ", you are still invited on the dinner"));
}
guests.pop();
guests.pop();
console.log(guests);
//Question 18
var locations = ["Switzerland", "America", "Austria", "France", "Spain"];
console.log(locations);
var alphabetical_order = __spreadArray([], locations, true);
alphabetical_order.sort();
console.log(alphabetical_order);
console.log(locations);
alphabetical_order.reverse();
console.log(alphabetical_order);
console.log(alphabetical_order.reverse());
console.log(locations.sort());
console.log(locations.reverse());
//Question 19
console.log("I am now inviting ".concat(guests.length, " on dinner tomorrow"));
