// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

//ANSWER
function consume(param1, param2, cb) {
  return cb(param1, param2)
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

//ANSWER
function add(num1, num2) {
  console.log(num1 + num2);
}

function multiply(num3, num4) {
  console.log(num3 * num4);
}

function greeting(first_name, last_name) {
  console.log(`Hello ${first_name} ${last_name}, nice to meet you!`);
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// This is because of lexical scoping. nestedFunction() is defined inside of myFunction(), 
// and so is considered an inner function and so becuase it's an inner function, it access to 
// the variable "internal" of its outer, parent function, myFunction(). When it references 
// the variable from myFunction, that's a closure.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();