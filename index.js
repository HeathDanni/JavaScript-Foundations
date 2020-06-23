
// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/
//  let principal = 200000;
//  let interestRate = 0.05;
//  let years = 30;
//  let name = "Heather";

// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

(1) Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 
(2) Create another variable called `periods` and give it the value of years*12.
*/
// let monthlyInterestRate = interestRate/12;
// let periods = years * 12;

// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe (also below) to run calculations on your numbers. Save the final value into a variable called monthlyRate. 

M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]

Hint: while these calculations can be done in one line, it might be helpful to create seperate variables to hold parts of your equation. That might look like this:

(1) Create a variable called n1 and set it equal to  (1 + monthlyInterestRate )^N
(2) Create a variable called numerator and set it equal to p * n1 * monthlyInterestRate
(3) Create a variable called denominator and set it equal to n1 - 1 
(4) Create a variable called monthlyRate and set it equal to numerator/denominator

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/
// let n1 = Math.pow(1 + monthlyInterestRate, periods);
// let numerator = principal * n1 * monthlyInterestRate;
// let denominator = (n1 - 1);
// let monthlyRate = numerator/denominator;

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/
// const mortgageCalculator = () => {
//    return `${name}, your monthly rate is ${monthlyRate}`;
//  };
//  console.log(mortgageCalculator());

// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/

// const mortgageCalculator = (P, I, N) => {
//   let name = "Heather";
//   let monthlyInterestRate = I/12;
//   let periods = N * 12;
//   let n1 = Math.pow(1 + monthlyInterestRate, periods);
//   let numerator = P * n1 * monthlyInterestRate;
//   let denominator = (n1 - 1);
//   let monthlyRate = numerator/denominator;

//     return `${name}, your monthly rate is ${monthlyRate}`;
//   }
//   console.log(mortgageCalculator(200000, 0.05, 30));

// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.

Hint: To drop an interest rate by 5% you can take monthlyRate and multiply it by 0.95. Similarly, to increase an interest rate by 5% you'd do monthlyRate * 1.05. 
*/
//  const mortgageCalculator = (P, I, N, creditScore) => {
//     let name = "Heather";
//     let monthlyInterestRate = I/12;
//     let periods = N * 12;
//     let n1 = Math.pow(1 + monthlyInterestRate, periods);
//     let numerator = P * n1 * monthlyInterestRate;
//     let denominator = (n1 - 1);
//     let monthlyRate = numerator/denominator;

//      if (creditScore > 740) {
//       monthlyRate *= 0.95;
//       } else if (creditScore < 660) {
//      monthlyRate *= 1.05;
//       } else {
//      monthlyRate;
//   }
  
//     return `${name}, your monthly rate is ${monthlyRate}`;
//   }
//   console.log(mortgageCalculator(200000, 0.05, 30, 500));


// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/

// const variableInterestRate = (P, I, N) => {

//   let interestRate = I - 0.02;
//   let name = "Heather";
  
//   for (let i = 0; i < 10; i++) {

//     let monthlyInterestRate = interestRate/12;
//     let periods = N * 12;
//     let n1 = Math.pow(1 + monthlyInterestRate, periods);
//     let numerator = P * n1 * monthlyInterestRate;
//     let denominator = (n1 - 1);
//     let monthlyRate = numerator/denominator;
   
//     console.log(`${name}, with an interest rate of ${Math.round( 1000* (interestRate)) / 1000}, your monthly rate is $${Math.round(monthlyRate)}`);

//     interestRate = interestRate + 0.005;
//   }
// }

// variableInterestRate(200000, 0.04, 30);
  

// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */

// const housingExpenseCaculator = (P, I, N, T, HI, HOA) => {
//   let principal = P;
//   let interestRate = I - 0.02;
//   let years = N;
//   let name = "Heather";
  

//   for (let i = 0; i < 10; i++) {

//     let monthlyInterestRate = interestRate/12;
//     let periods = years * 12;
//     let n1 = Math.pow(1 + monthlyInterestRate, periods);
//     let numerator = principal * n1 * monthlyInterestRate;
//     let denominator = (n1 - 1);
//     let monthlyRate = numerator/denominator;
//     let taxes = (principal * (T/100)/12);
//     let totalMonthlyRate = monthlyRate + taxes + + HI + HOA;

//     console.log(`${name}, with an interest rate of ${Math.round( 1000* (interestRate)) / 1000}, a tax rate of ${T}%, homeowner's insurance at $${HI}, and an HOA due of $${HOA} your total monthly housing expenses are $${Math.round(totalMonthlyRate)}`);

//     interestRate = interestRate + 0.005;
//   }
// }

// housingExpenseCaculator(200000, 0.04, 30, 1, 100, 200);
  
/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */

// const maxLoanCaculator = (monthlyP, I, N) => {

//   let yearlyP = (monthlyP * 12);
//   let P = (yearlyP - (yearlyP * (I/100))) * N;

//   return `With a monthly payment of $${monthlyP} for $${N} at an in interest rate of ${I}%, your maximum loan you can afford is $${P}`
// }
/* This did not seem to bring the correct answer. Seems to be more than what the principal loan would be.*/

// console.log(maxLoanCaculator());

/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */

// const mortgageCalculator = () => {

//   let name = prompt(`What is your name?`)
//   let principal = prompt(`What is the principal of your loan?`);
//   let interestRate = prompt(`What is the interest on your loan?`);
//   let years = prompt(`What is the length of your loan?`);

//   let monthlyInterestRate = interestRate/12;
//   let periods = years * 12;
//   let n1 = Math.pow(1 + monthlyInterestRate, periods);
//   let numerator = principal * n1 * monthlyInterestRate;
//   let denominator = (n1 - 1);
//   let monthlyRate = numerator/denominator;

//     return `${name}, your monthly rate is ${monthlyRate}`;
//   }

//   console.log(mortgageCalculator());

/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */

// const variableInterestRate = (P, I, N) => {
  
//   let principal = P;
//   let interestRate = I[0];
//   let years = N;
//   let name = "Heather";
  
//   for (let i = 0; i < (I.length); i++) {

//     let monthlyInterestRate = interestRate/12;
//     let periods = years * 12;
//     let n1 = Math.pow(1 + monthlyInterestRate, periods);
//     let numerator = principal * n1 * monthlyInterestRate;
//     let denominator = (n1 - 1);
//     let monthlyRate = numerator/denominator;
   
//     console.log(`${name}, with an interest rate of ${Math.round( 1000* (interestRate)) / 1000}, your monthly rate is $${Math.round(monthlyRate)}`);

//     interestRate = I[i + 1];
//   }
// }

// variableInterestRate(200000, [0.02, 0.025, 0.09], 30);