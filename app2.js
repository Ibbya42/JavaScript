// Fetching the data using the fetch api and entering the link
// fetch("https://jsonplaceholder.typicode.com/users/1")

// Created a constant variable called emailRef 
// Created a document query selector to call the span call from the html
// const emailRef = document.querySelector('.email')

// // Two Methods to unlock data
// // 1. Then 

// // Fetch the data from the backend
// fetch("https://jsonplaceholder.typicode.com/users/1")
// // Unlock the data from the backend 
// .then((response) => {
//     // Helps change the data into the actual text
//     return response.json();
// })
// // Need to use .then again as the json above turns the whole code into a promise. 
//     .then((data) => {
//         // Print out the data
//         console.log(data);
//         // call email ref to add email address onto .email on html fle
//         emailRef.innerHTML = data.email
//     });


    // 2. Async/Await
    
    // To call a await we will need to have it inside a async function 
    async function main() {
        // To unlock the data we can use a variable which equal to the data that is being 
        // fetched. 
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data = await response.json()
        console.log(data)
        
        
    }

    main()