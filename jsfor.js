// // for (i = 0; i <100; i++){
// //     if (i % 2){
// //         console.log(i);
// //     }
// // }
// // var names = ["Pilar", "Petunia", "Pamela", "Tan", "Amanda", "Phil"]

// // var numbers = [2, 4, 6, 8, 10, 12];

// // for (var i = 0; i < 6; i++)

// // for (var i = 25; i < 75; i++){
// //     if (i % 2 == 0);
// //         console.log(i);
// //     }

// // var password = "side54";
// //     if (password.length >= 8 && )

// function greetMe(first, last,) {
//     console.log(`My first name is ${first} and my last name is ${last}`)
// }

// // greetMe("pat", "ank");
//  var personName = "Tim";
//     if (personName === "Craig") {
//         console.log("Hello, Craig");
//     } else {
//         console.log("Nice to meet you " + personName + ", you are a stranger")
//     }
//     var words = ["sUnNy", "BeAcH", "wAvEs", "ReLaX"]
    
//     for (i = 0; i < words.length; i++) {
//         console.log(words[i].toUpperCase());
//     }

//     for (var i = 12; i < 19; i++) {
//         console.log(i);
//     }

//     for (var i = 0; i < 6; i++) {
//         console.log("This number " + i + " is cool.😎");
//     }

    // var numbers = [10, 11, 7, 19, 4, 52, 89, 9, 12, 10]

    // for (var i = 0; i < numbers.length; i++) {
    //     if (numbers[i] > 10) {
    //         console.log(numbers[i]);
    //     }
    // }

    // for (var i = 3; i < 15; i++) {
    //     console.log(i);
    // }

    // var numbers = [2, 4, 6, 8, 10, 12]

    // for (var i = 0; i < numbers.length; i++) {
    //     console.log(numbers[i] * numbers[i]);
    // }

// var words = ["sUnNy", "BeAcH", "wAvEs", "ReLaX"]

// for (var i = 0; i < words.length; i++) {
//     console.log(words[i].toLowerCase());
// }

// var names = ["Pilar", "Petunia", "Pamela", "Tan", "Amanda", "Phil", "perkins"]

// for (var i = 0; i < names.length; i++) {
//     if (names[i].startsWith("P") || names[i].startsWith("p")) {
//         console.log(names[i]);
//     }
// }

// for (var i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }

// var myAge = 19;

// var theirAge = 24;

// console.log((myAge < 20 || theirAge > 40)); 
// Checj if myAge is under 20 or if theirAge is over 40: this set up rings true

// var password = "cranb7yh#";

// if (password.length >= 8 && password.includes("#")) {
//     console.log("Got it. Your password is: " + password);
// } else {
//     console.log("Your password does not satisfy the requirements");
// }

// var friends = ["Thomas", "Pie", "Matt", "Liz", "Nolan"]

// friends;
// friends.pop();
// friends.pop(1);
// console.log(friends);
// console.log((1));

// function getMinimum(list) {
//     // for (var i = 0; i < list.length; i++) {
//       return Math.min(...list);
//     // }    
//   }
  
//   function getMaximum(list) {
//     //   for (var j = 0; j < list.length; j++) {
//       return Math.max(...list);
//     //  }   
//   }
  
//   let numList = [3, 23, 45, 65, 2, 68, 95, 33, 43];
  
//   let min = getMinimum(numList);
  
//   let max = getMaximum(numList);
  
//   console.log(min);
  
//   console.log(max);

  var min = function(list) {
    return Math.min(...list);    
  }
  
  var max = function(list) {
    return Math.max(...list);   
  }
  
  let numList = [3, 23, 45, 65, 2, 68, 95, 33, 43];
  
  console.log(min(numList));
  console.log(max(numList));


