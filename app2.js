// Fetching the data using the fetch api and entering the link
// fetch("https://jsonplaceholder.typicode.com/users/1")

// Created a constant variable called emailRef 
// Created a document query selector to call the span call from the html
const emailRef = document.querySelector('.email')

// Two Methods to unlock data
// 1. Then 

// Fetch the data from the backend
fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//    Makes the dataset compatibale with the frontend 
    response.json().then((data) => {
        console.log(data)
        // The email ref will add the data from the dataset
        // and call it onto the frontend
        emailRef.innerHTML = data.email
    })
})



// 1. Async/Await