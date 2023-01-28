// var myName = "Ankiewicz";
// // console.log(myName.split(''));

// var nameArray = ["a", "n", "k", "i", "e", "w", "i", "c", "z"]

// for (var i = 0; i < nameArray.length; i++) {
//     var firstThree = (nameArray[i]);
// }
// console.log(firstThree);

function greetMe(firstName, lastName) {
    console.log(`Hello ${firstName}, we might also call you by your last name, ${lastName}`);
}

console.log(greetMe("patrick", "ankiewicz"));
console.log(greetMe("greg", "samson"));

function payScale(company, basePay, topPay) {
    difference = topPay - basePay;
    // return difference;
    console.log(`The report is in the pay range between emloyees at ${company} is ${difference}`);
}
console.log(payScale("chillis", 45000, 68000));

function checkStock(stock, product) {
    if (stock === 0) {
        console.log(`${product} is out of stock!`) 
    } 
    if (stock < 4) {
        console.log(`${product} is running low`);
    }
    if (stock >= 4) {
        console.log(`${product} is stocked!`);
    }
 }    

// console.log()

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
