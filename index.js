var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question 2
var person_name = "Haris Naeem";
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
Name = "\t Haris \nNaeem";
console.log(Name);
Name = Name.trim();
Name = Name.replace("\n", "");
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
console.log("I am now inviting ".concat(guests.length, " people on dinner tomorrow"));
//Question 20
var rivers_arr = ["Ravi", "Jhelum", "Chenab", "Indus", "Sindh"];
//Question 21
var details = {
    rivers: ["Ravi", "Jhelum", "Chenab", "Indus", "Sindh"],
    mountains: ["K2", "Nanga Parbat", "Mount Everest", "Broad Peak"],
    countries: ["Pakistan", "England", "Canada", "America", "Spain"],
    languages: ["Urdu", "English", "French", "Dutch", "German"],
    cities: ["Islamabad", "New York", "Calgary", "London", "Barcelona"],
};
console.log(details.rivers);
//Question 22 (Fixed in Question 3)
//Question 23
//True tests
var car = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car === "subaru" ? true : false);
var animal_name = "camel";
console.log("Is animal name == 'camel'? true ");
console.log(animal_name === "camel" ? true : false);
var bird = "sparrow";
console.log("Is bird == 'sparrow'? I predict True.");
console.log(bird === "sparrow");
var truck = "ford";
console.log("Is truck == 'ford'? I predict True.");
console.log(truck === "ford" ? true : false);
var bus = "metro";
console.log("Is bus == 'metro'? I predict True.");
console.log(bus === "metro" ? true : false);
//False Tests
var country = "Pakistan";
console.log("Is Pakistan == 'Canada'? I predict True.");
console.log(country === "Canada" ? true : false);
var city = "Karachi";
console.log("Is City name == 'Lahore'? I predict true. ");
console.log(city === "Lahore" ? true : false);
var Fav_food = "Biryani";
console.log("Is Favourite food == 'Pulao'? I predict True.");
console.log(Fav_food === "Pulao" ? true : false);
var river = "Indus";
console.log("Is river == 'jhelum'? I predict True.");
console.log(river === "jhelum" ? true : false);
var fav_sport = "cricket";
console.log("Is favourite sport == 'Football'? I predict True.");
console.log(bus === "football" ? true : false);
//Question 24
//Tests for equality and inequality with strings
var designation = "Manager";
console.log(designation === "manager" ? true : false);
//Tests using the lower case function
console.log(designation.toLowerCase() == "manager" ? true : false);
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var salary = 25000;
console.log(salary < 10000 ? true : false);
console.log(salary > 3000 ? true : false);
console.log(salary === 25000 ? true : false);
console.log(salary === 15000 ? true : false);
// Tests using "and" and "or" operators
console.log(salary > 10000 && salary < 20000 ? true : false);
console.log(salary > 20000 || salary < 30000 ? true : false);
//Test whether an item is in a array
var exams = ["DSA", "OOP", "PF", "Calculus"];
exams.forEach(function (exam, index) {
    if (exam === "OOP") {
        console.log("".concat(exam, " found at index ").concat(index));
    }
});
//Test whether an item is not in a array
var examFound = true;
exams.forEach(function (exam, index) {
    if (exam === "Stats") {
        examFound = true;
    }
    else {
        examFound = false;
    }
});
if (examFound) {
    console.log("Stats found in exams!");
}
else {
    console.log("Stats not found in exams!");
}
//Question 25
var alien_color = "Green";
if (alien_color == "Green" || alien_color == "green") {
    console.log("The player earned 5 points!");
}
alien_color = "Yellow";
if (alien_color == "Green" || alien_color == "green") {
    console.log("The player earned 5 points!");
}
else {
}
//Question 26
alien_color = "green";
if (alien_color == "Green" || alien_color == "green") {
    console.log("The player earned 5 points for shooting the alien!");
}
else {
    console.log("The player just earned 10 points!");
}
alien_color = "yellow";
if (alien_color == "Green" || alien_color == "green") {
    console.log("The player earned 5 points for shooting the alien!");
}
else {
    console.log("The player just earned 10 points!");
}
//Question 27
alien_color = "green";
if (alien_color == "Green" || alien_color == "green") {
    console.log("The player earned 5 points!");
}
else if (alien_color == "Yellow" || alien_color == "yellow") {
    console.log("The player just earned 10 points!");
}
else if (alien_color == "Red" || alien_color == "red") {
    console.log("The player just earned 15 points!");
}
alien_color = "yellow";
if (alien_color == "Green" || alien_color == "green") {
    console.log("The player earned 5 points!");
}
else if (alien_color == "Yellow" || alien_color == "yellow") {
    console.log("The player just earned 10 points!");
}
else if (alien_color == "Red" || alien_color == "red") {
    console.log("The player just earned 15 points!");
}
alien_color = "Red";
if (alien_color == "Green" || alien_color == "green") {
    console.log("The player earned 5 points!");
}
else if (alien_color == "Yellow" || alien_color == "yellow") {
    console.log("The player just earned 10 points!");
}
else if (alien_color == "Red" || alien_color == "red") {
    console.log("The player just earned 15 points!");
}
//Question 28
var age = 2;
if (age < 2) {
    console.log("The person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is a adult");
}
else if (age >= 65) {
    console.log("The person is a elder");
}
//Question 29
var favourite_fruits = ["Cherry", "Mango", "Grapes"];
for (var i = 0; i < 5; i++) {
    if (favourite_fruits[i] == "Banana") {
        console.log("You really like Banana");
    }
    else if (favourite_fruits[i] == "Cherry") {
        console.log("You really like cherry");
    }
    else if (favourite_fruits[i] == "Apple") {
        console.log("You really Like Apple");
    }
    else if (favourite_fruits[i] == "Grapes") {
        console.log("You really like Grapes");
    }
    else if (favourite_fruits[i] == "Mango") {
        console.log("You really like mangoes");
    }
}
//Question 30
var usernames = [
    "admin",
    "haris-eng7",
    "imran786",
    "noman3557",
    "shopifydev7",
];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var name_2 = usernames_1[_i];
    if (name_2 == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(name_2, ", thank you for logging in again."));
    }
}
//Question 31
if (usernames.length > 0) {
}
else {
    console.log("We need to find some users");
}
usernames.shift();
usernames.shift();
usernames.shift();
usernames.shift();
usernames.shift();
console.log(usernames);
if (usernames.length > 0) {
}
else {
    console.log("We need to find some users");
}
//Question 32
var current_users = [
    "admin",
    "hariseng7",
    "imran786",
    "noman3557",
    "shopifydev7",
    "eng7",
];
var new_users = ["ashir123", "ahmadali", "admin", "hariseng7", "imran123"];
new_users.forEach(function (user) {
    if (current_users.includes(user)) {
        console.log("Username already exist. please try a new one");
    }
    else {
        console.log("Username available to use!");
    }
});
//Question 33
var ordinal_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var num = 1; num <= ordinal_nums.length; num++) {
    if (num == 1) {
        console.log("1st");
    }
    else if (num == 2) {
        console.log("2nd");
    }
    else if (num == 3) {
        console.log("3rd");
    }
    else {
        console.log("".concat(num, "th"));
    }
}
//Question 34
var fav_pizzas = ["Crown Crust", "Chicken Tikka", "Creamy Melt"];
for (var pizza in fav_pizzas) {
    console.log(fav_pizzas[pizza]);
}
console.log("I like pizza very much. I am in love with Crown crust pizza from Cheezious but the Creamy Melt from Pizza Hut is good too!");
//Question 35
var animals = ["Dog", "Cat", "Horse"];
animals.forEach(function (animal) {
    console.log(animal);
});
animals.forEach(function (animal) {
    if (animal == "Dog") {
        console.log("".concat(animal, " is a great pet!"));
    }
    else if (animal == "Cat") {
        console.log("".concat(animal, " is a great pet!"));
    }
    else if (animal == "Horse") {
        console.log("".concat(animal, " is a great animal!"));
    }
});
console.log("All of these animals are good for keeping im home");
//Question 36
function make_shirt(size, text) {
    console.log("Size of shirt is ".concat(size, " and text to be printed is ").concat(text));
}
make_shirt("Small", "Adidas");
//Question 37
function make_shirt_large(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love typescript"; }
    console.log("Size of shirt is ".concat(size, " and text to be printed is ").concat(text));
}
make_shirt_large();
function make_shirt_medium(size, text) {
    if (size === void 0) { size = "medium"; }
    if (text === void 0) { text = "I love React.js"; }
    console.log("Size of shirt is ".concat(size, " and text to be printed is ").concat(text));
}
make_shirt_medium();
function make_shirt_small(size, text) {
    if (size === void 0) { size = "Small"; }
    if (text === void 0) { text = "I love Javascript"; }
    console.log("Size of shirt is ".concat(size, " and text to be printed is ").concat(text));
}
make_shirt_small();
//Question 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Paris", "France");
//Question 39
function city_country(city, country) {
    console.log("".concat(city, ", ").concat(country));
}
city_country("Islamabad", "Pakistan");
city_country("Calgary", "Canada");
city_country("London", "Uk");
//Question 40
function make_album(artist, title, tracks) {
    if (tracks === void 0) { tracks = 0; }
    if (tracks > 0) {
        return {
            artist: artist,
            title: title,
            tracks: tracks,
        };
    }
    else {
        return {
            artist: artist,
            title: title,
        };
    }
}
console.log(make_album("Nusrat", "Qawali's"));
console.log(make_album("Atif Aslam", "Songs"));
console.log(make_album("Rahat Fateh", "Songs"));
console.log(make_album("Arijit Singh", "Songs", 20));
//Question 41
var magicians = ["Harry", "David", "Pen", "Lance", "Derren"];
function show_magicians() {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians();
function make_great() {
    magicians.forEach(function (magician, index) {
        magicians[index] = magician + " is Great!";
    });
}
make_great();
show_magicians();
//Question 43
var new_magicians = __spreadArray([], magicians, true);
//Question 44
function getSandwiches(sandwich) {
    sandwich.forEach(function (sandi) {
        console.log(sandi);
    });
}
getSandwiches(["ketchup", "Cheese", "Butter"]);
getSandwiches(["Chicken", "Butter"]);
getSandwiches(["ketchup", "Cheese", "Butter", "Salad"]);
//Question 45
function getCars(model, manufacturer) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        Model: model,
        Manufacturer: manufacturer,
        Options: options,
    };
    return car;
}
console.log(getCars("Civic", "Honda"));
console.log(getCars("Model-x", "Tesla", "Black"));
console.log(getCars("Altis", "Toyota", "White", "2022"));
