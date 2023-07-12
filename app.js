// // String Data Type
// console.log('Ibrahim')

// // String Indexing
// console.log('Hello World' [10])

// // Finding String Length - Total length of characters in the string
// console.log('Ibrahim'.length)
// // Alternative Method
// let str = ('Ibrahim')
// console.log(str.length)

// // Number Data Type
// console.log(5+5)

// // Boolean Data Type
// // Will return False
// console.log(5 > 10)
// // Will return True
// console.log(5 < 10)

// let name = 'Ibrahim'
// let temperature = 15
// let planetName ='Mars'

// temperature = temperature + 5
// console.log(temperature)

// Conversion Exercise
// let celsius = 10;
// let farrenheit = celsius * 1.8 + 32;
// console.log(farrenheit);

// If Else Statement
// let cash = 35;
// let price = 40;
// let difference = cash - price;

// if (cash > price){
//     console.log(`You paid extra - here is ${difference} dollars change`)
// }
// else if (cash === price){
//     console.log('You have paid the correct Amount')
// }
// else{
//     console.log(`Not enough cash, you still require ${difference * -1 } dollars`)
// }

// let cash = 60;
// let price = 50;
// let inStock = false; 

// if (cash >= price || inStock === true){
//     console.log("There is stock and we have enough to purchase the product");
// }

// let hot = true;
// hot ? console.log('Weather is hot') : console.log('Weather is cold');

// let cash = 50;
// let price = 40;
// let isStoreOpen = true; 
// let str = cash >= price && isStoreOpen ? 'Give receipt' : 'Do not give Receipt';
// console.log(str);

// While loop
// let count = 1; 
// while (count <= 10) {
//     console.log(count)
//     count = count + 1;
// }

// For Loop
// for ( let i = 1 ; i <=3; i++){
//     console.log(i);
// }


// for ( let i = 1 ; i <=20 ; i++){   

//      if (i % 5 == 0 && i % 3 == 0) {
//         console.log('Frontend Simplified');
//     }
//    else if (i % 3 == 0) {
//         console.log('Frontend');
//     }
//     else if (i % 5 == 0) {
//         console.log('Simplified');
//     }
//     else{
//         console.log(i);
//     } 
// }


// const str = 'Frontend Simplified';
// for ( let i = 0; i <19 ; i++){
//     console.log(str[i]);
// }



// // Define the function 
// function welcometoFES(name , age ){
//     console.log(`Welcome to ESR, ${name}. I am ${age} years old`)
// }

// // Calling the function 
// welcometoFES('Ibrahim', '22');
// welcometoFES('John' , '30');


// function calculation(sum1 , sum2){
//     return sum1 + sum2;
// }

// console.log(calculation(10 , 20));


// Defined the function celsius which will hold the data 
// function calculation(celsius){
//     // Using the data in celsius to complete the equation to get the fahrenheit temperature
//     return celsius * 1.8 + 32
// }

// // Calling the function celcius with its valued amount
// console.log(calculation(0))
// console.log(calculation(10))
// console.log(calculation(30))


// // Arrow function Method

// const calculation = (celsius) => {
//     return celsius * 1.8 + 32
// }
// // Calling the function celcius with its valued amount
// console.log(calculation(0))
// console.log(calculation(10))
// console.log(calculation(30))

// Arrays 

let arr = [20 , 40 , 60, 80 , 100];

console.log(arr[arr.length -1])
console.log(arr[0]);

arr.push(150);

console.log(arr);