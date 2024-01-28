// Get references to the form and result div elements
const form = document.getElementById('myForm');
const resultDiv = document.getElementById('result');
// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
event.preventDefault();
// Clear previous results
resultDiv.innerHTML = '';
// Retrieve form values
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
// Perform form validation
if (!name || !email || !password) {
// Display error message for missing fields
resultDiv.innerHTML = '<p class="text-danger error">All fields are required.</p>';
// resultDiv.style.innerHTML = "text-danger";
} else if (password.length < 6) {
// Display error message for short password
resultDiv.innerHTML = '<p class="text-danger error">Password must be at least 6 characters long.</p>';
//resultDiv.style.innerHTML = "text-danger";
} else {
// Display success message
resultDiv.innerHTML = '<p class="text-success border border-success">Form submitted successfully!</p>';
//resultDiv.style.innerHTML = "text-success";
}
});

function test(){
    let password = "abcd";

    if( /[A-Z]/.test(password) ){
    console.log("Uppercase letter found" );
    }
    //lowercase test
    if(/[a-z]/.test(password)){
        console.log("lowercase letter found");
    }
    //digit test
    if(/\d/.test(password))
    {
        console.log("A number was found");
    }
    //password length test
    if(password.length < 8){
        console.log("min char length needs to be 8");
    }
}
test();