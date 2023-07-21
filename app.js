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

// // Arrays 
// let arr = [20 , 40 , 60, 80 , 100];
// console.log(arr[arr.length -1])
// console.log(arr[0]);

// // Add another element to the array
// arr.push(150);
// console.log(arr);

// Array Filters

// let arr = [20 , 40 , 60, 80 , 100];

// let newArr = arr.filter(element => {
// return element < 50
// })

// console.log(newArr)


// let grade = ['FAIL'];

// let failgrade = grade.filter (element => {
//     return element !== 'FAIL'
// })

// console.log(failgrade)

// let grade = ['A+', 'A', 'FAIL']
// let goodgrade = [];

// for (let i = 0; i < grade.length; i++){
//     if (grade[i] === 'A'){
//         goodgrade.push(grade[i])
//     }
// }

// console.log(goodgrade)

// Array Maps 

// let dollars = [ 1 , 5 , 10 , 3]
// let cents = dollars.map (element => element * 100)
// console.log(cents)


// let dollars = [ 1 , 5 , 10 , 3]
// let cents = []

// for ( i = 0; i < dollars.length ; i++){
//     cents.push(dollars[i] * 100)
// }

// console.log(cents)


// Objects

// User object that has the exisiting data 
let user =[
{
    username: 'Ibrahim', 
    email: 'ibrahimsaheed831@outlook.com',
    password: 'test123',
    subscriptionstatus: 'VIP',
    id: '429000',
    lessoncompleted: [0 , 1]
},

{
    username: 'John', 
    email: 'Johncena@outlook.com',
    password: 'test321',
    subscriptionstatus: 'VIP',
    id: '421234509000',
    lessoncompleted: [0 , 1 , 3]
}

]

// // Create a function that collects the email and password 
// function login(email , password){
//     // Loops through all the emails and password in the object 
//     for ( let i = 0; i < user.length; ++i){
//         // if the email from the users array matches the email given in the 
//         // login function print out the details 
//         if ( user[i].email === email){
//          console.log(user[i]);
//         //  Also if the password matches with the details in the login function 
//         // release an output stating the credentials are correct 
//          if (user[i].password === password){
//             console.log('Details correct, Logging user in')
//          }
//         //  If either of the details are wrong - Print this statement 
//          else{
//             console.log("Incorrect email or password")
//          }
//         //  Add return statament so that the loop stops running after finding the 
//         // correct details or has ended the cycle. 
//          return;
//         }
//     }
//     // Statment if no email is found outside of the for loop
//     console.log('Email not found')
// }

// login('ibrahimsaheed831@outlook.com' , 'test123');

// Create a register function to take all the parameters in from the user object
// function register (users){
//      user.push(users);
// }


    // Declaring an array where the information from the register will be pushed onto user object. 
    // The username from the user object will equal to the name in the register function. 
    // let users = {
    //     username: name,
    //     email: email,
    //     password: password,
    //     subscriptionStatus: subscriptionStatus,
    //     id: id, 
    //     lessonCompleted: lessonCompleted
    // }   
   

// // The register function that will add all the data from users. 
// register
//  ({
//      username:'John', 
//      email:'Johncena@outlook.com' , 
//      password: 'test321',
//      subscriptionStatus: 'Basic' , 
//      id: '323443' , 
//      lessonCompleted: [0 , 1, 2]
//  });

//  register
//  ({
//      username:'John', 
//      email:'Johncena@outlook.com' , 
//      password: 'test321',
//      subscriptionStatus: 'Basic' , 
//      id: '323443' , 
//      lessonCompleted: [0 , 1, 2]
//  });

// //  Print out users after the addition. 
// console.log(user);


// // First way to accessing an element 
// console.log(document.querySelector('#title'))
// console.log(document.querySelector('.title'))


// // Second way to accessing an element 
// // This only works if the element has an id

// console.log(document.getElementById('title'))

// document.querySelector('.title').innerHTML = 'Title has been changed';
// document.querySelector('.title').style.color = 'red';

function changetitletored(){
    document.querySelector('.title').style.color = 'red';
    console.log('Clicked');
}

