// var animals = ["cat", "dog", "raccoon", "alligator"]

// for (var i = 0; i < animals.length; i++) {
//     if (animals[i].length > 3) {
//         console.log(animals[i]);
//     }
// }

// /* In this challenge I will need to print words that start with "s"
// from an array:
// 1. create an array, making sure some strings start with the letter "s"
// 2. create a for loop that starts at index one and runs through array
// 3. make an if statement using a .startswith selector
// 4. create a log
// */
// var friends = ["Pie", "sarah", "Sam", "Suzane", "Matt", "Lex"]

// for (var i = 0; i < friends.length; i++) {
//     if (friends[i].startsWith('s') || friends[i].startsWith('S')) {
//         console.log(friends[i]);
//     }
// }

// /* In this challenge I will take an array and convert every "t" to a "T".
// 1. Make an array of strings
// 2. create a for loop that starts at index 0 and runs throgh array
// 3. write a console log that prints all selected characters as "T"
// */
// var words = ["attic", "sand", "grotton", "Rot", "sloppy"]

// for (var i = 0; i < words.length; i++) {
//     console.log(words[i].replaceAll('t', 'T'));
// }

/* create an array of names and print them alphabetically and numbered.
1. create an array of names
2. write a function that takes an array as a declaration.
3. write a return for the array ordering it in alphabetical
4. incantonate numbers into the log print
*/
// var names = ["Hector", "Winston", "Finley"]

// function nameOrganizer(array) {
//     var alphabetized = array.sort();
//     for (var i = 0; i < alphabetized.length; i++) {
//         return `1. ${alphabetized[i]} 2. ${alphabetized[i += 1]} 3.${alphabetized[i += 1]}`;
//     }
// }
// console.log(nameOrganizer(names));

/* Goal is to turn 10 integers into a phone number format.
1. list array of numbers
2. create 3 strings/or add two "-" into the array and combine them to a string
3. print ew string(s)
*/

// var telNum = [6, 7, 8, 9, 0, 3, 4, 5, 6, 7]

// function phoneNum(ary) {
//     var combined = ary.join("");
//     for (var i = 0; i < 3; i++) {
//         var firstThree = `${combined[i]}${combined[i += 1]}${combined[i += 1]}`;
//         // return firstThree;
//     }
//     for (var i = 3; i < 6; i++) {
//         var secondThree = `${combined[i]}${combined[i += 1]}${combined[i += 1]}`;
//         // return `${firstThree}-${secondThree}`;
//     }
//     for (var i = 6; i < ary.length; i++) {
//         var lastFour = `${combined[i]}${combined[i += 1]}${combined[i += 1]}${combined[i += 1]}`
//     }
//     return `${firstThree}-${secondThree}-${lastFour}`;
// }
// console.log(phoneNum(telNum));

// function phoneNum(ary) {
//     // var combined = ary.join("");
//       {
//         var firstThree = ary[i];
//         // return firstThree;
//     }
//     for (var i = 3; i < 6; i++) {
//         var secondThree = ary[i];
//         // return `${firstThree}-${secondThree}`;
//     }
//     for (var i = 6; i < ary; i++) {
//         var lastFour = ary[i];
//     }
//     return `${firstThree}-${secondThree}-${lastFour}`;
// }
// console.log(phoneNum(telNum));

// var lastName = "Ankiewicz";
// var letters = lastName.split('');
// // for (var i = 0; i < 3; i++) {
//     var threeFirst = letters.join(0, 1, 2);
    

// console.log(threeFirst);
var telNum = [6, 7, 8, 9, 0, 3, 4, 5, 6, 7]

function phoneNum(ary) {
    var number = '';
    number += ary.slice(0,3).join('');
    number += '-';
    number += ary.slice(3, 6).join('');
    number += `-`
    number += ary.slice(6, 11).join('');
    return number;
}

// const printPhone = phoneNum(telNum);
// console.log(phoneNum(telNum));
