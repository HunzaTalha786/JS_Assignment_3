// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.

var num1=3;
document.write(`1:  num1=${num1}<br>`);
var num2=5;
document.write(`2: num2=${num2}<br><br><br>`);

var add_num=num1+num2;
document.write(`a: Sum of 3 & 5 is ${add_num}.<br/> `);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var num1=3;
var num2=5;
var add_num=num1-num2;
document.write(`b: Subraction of 3 & 5 is ${add_num}. <br>`);
var add_num=num1*num2;
document.write(`c: Multiplication of 3 & 5 is ${add_num}. <br>`);
var add_num=num1%num2;

document.write(`d: Modulus of 3 & 5 is ${add_num}. <br><hr><br>`);

// 3. Do the following using JS Mathematic Expressions

// a. Declare a variable.
var num ;

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write(`a: Value after variable declaration is undefined.<br>`);

// c. Initialize the variable with some number.
num=5;

// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write(`b: Initial value:${num}<br>`);

// e. Increment the variable.
var num1=++num;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write(`c: Value after increment is ${num}.<br>`);

// g. Add 7 to the variable.
var num=num1+7;

// h. Show the value of variable in your browser like “Value  after addition is: 13”.
document.write(`d: Value  after addition is ${num}.<br>`);

// i. Decrement the variable.
var num2=--num;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write(`e:Value after decrement is ${num}<br>`);

// k. Show the remainder after dividing the variable’s value  by 3. 
var num =num%3;

// l. Output : “The remainder is : 0”.
document.write(`f: Output :The remainder is ${num} <br> <hr><br>`);


// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets to a movie. 

var ticket_price=600;
document.write(`Ticket Price=${ticket_price}<br/>`);
var five_tickets=ticket_price*5;
document.write(`Total cost to buy 5 tickets to a movie is ${five_tickets}<b>PKR</b>.<br/><br/><hr><br/> `);

// 5. Write a script to display multiplication table of any number in your browser.

var table=4;
document.write(`Table of ${table}<br><br>`);
document.write(`${table}x1=${table*1}<br/>`);
document.write(`${table}x2=${table*2}<br/>`);
document.write(`${table}x3=${table*3}<br/>`);
document.write(`${table}x4=${table*4}<br/>`);
document.write(`${table}x5=${table*5}<br/>`);
document.write(`${table}x6=${table*6}<br/>`);
document.write(`${table}x7=${table*7}<br/>`);
document.write(`${table}x8=${table*8}<br/>`);
document.write(`${table}x9=${table*9}<br/>`);
document.write(`${table}x10=${table*10}<br/><br/><hr> <br/>`);

// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”

var ct =25;
document.write(`1: CT = ${ct}<br/>`);
var ft=70;
document.write(`2: FT = ${ft}<br/><br/>`);
document.write(`a: ${ct}<sup>0</sup>C is ${(ct*9/5)+32}<sup>0</sup>F<br/>`);
document.write(`b: ${ft}<sup>0</sup>F is ${(ft-32)*5/9}<sup>0</sup>C<br/><br/> <hr/><br>`);


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store 
// the following in variables:

document.write(`<h1>Shopping Cart</h1><br/><br/>`);

// a. Price of item 1:
var item_1=650;
document.write(`a: Price of item 1 is ${item_1}.<br/>`);

// b. Ordered quantity of item 1:
var quantity_1=3;
document.write(`b: Quantity of item 1 is ${quantity_1}.<br/>`);
// c. Price of item 2:
var item_2=100;
document.write(`c: Price of item 2 is ${item_2}.<br/>`);

// d. Ordered Quantity of item 2:
var quantity_2=7;
document.write(`d:  Quantity of item 2 is ${quantity_2}.<br/>`);

// e. Shipping charges:
var charges =100;
document.write(`e: Shipping charges is ${charges}.<br/><br/>`);

// Compute the total cost & show the receipt in your browser:
var total_cost= item_1*quantity_1 + item_2*quantity_2;
document.write(`Total cost of your order is ${total_cost}.<br/> <br/> <hr/> <br>`);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in  your browser:

document.write(`<h1>Mark Sheet</h1><br/><br/>`);

var total_marks=980;
document.write(`Total marks : ${total_marks}<br/>`);

var obtained_marks=804;
document.write(`Marks obtained : ${obtained_marks}<br/>`);

var percentage=obtained_marks/total_marks*100;
document.write(`Percentage : ${percentage}<br/> <br/> <hr/> <br/>`);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee):

document.write(`<h1>Currency in PKR</h1><br/>`);

var dollar_price=104.80;
document.write(`1: Price of 1 US Dollar = ${dollar_price}PKR <br/>`);
var dollar_quantity=10;
document.write(`2: Quantity of US Dollar =${dollar_quantity}<br/>`);

var Riyal_price=28;
document.write(` 3: Price of 1 Saudi Riyal = ${Riyal_price}PKR <br/>`);
var riyal_quantity=25;
document.write(`4: Quantity of Saudi Riyal =${riyal_quantity}<br/><br/>`);

var total_currency=dollar_price*dollar_quantity+Riyal_price*riyal_quantity;
document.write(`Total Currency in PRK : ${total_currency}<br/> <br/><hr/><br/>`);

// 10.Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression:

document.write(`<h1>Arithmetic Calculation</h1><br/>`);

var x=10;
document.write(`a: x= ${x}<br/>`);

var add=x+5;
document.write(`b: 10+5= ${add}<br/>`);

var multiply=add*10;
document.write(`c: 15*10= ${multiply}<br/>`);

// Perform all calculations in a single expression:
var result=(10+5)*10/2;
document.write(`d: Result of all calculation in a single expression = ${result}<br/><br/><hr/><br/>`);

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

document.write(`<h1>Age Calculator</h1><br/>`);

var currentYear = 2016;
document.write(`Current year : ${currentYear}<br/>`);
var birthYear =1992;
document.write(`Birth year : ${birthYear}<br/>`);
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write(`They are either ${age1 }or ${age2}  years old.<br/><br/><hr/><br/>`);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142):

var pie =3.142;
var radius=20;
document.write(`<h1>The Geometrizer</h1><br/>`);
document.write(`Radius of a cicle : ${radius}<br/>`);

var circumtances=(2*pie)*radius;
document.write(`The circumtances is : ${circumtances}<br/>`);

var area=(pie)*radius*20;
document.write(`The area is : ${area}<br/><br/><hr/><br/>`);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.

document.write(`<h1>The Lifetime Supply Calculator</h1><br/>`);

var f_snack='Chocolate Chips';
document.write(`Favorite Snack : ${f_snack}<br/>`);

var current_age=15;
document.write(`Current age : ${current_age}<br/>`);

var max_age=65;
document.write(`Estimate Maximam Age : ${max_age}<br/>`);

var amount=3;
document.write(`Amount of snacks per day : ${amount}<br/>`);

var total_eat=(max_age*amount)-(current_age*amount);
document.write(`You will need ${total_eat} ${f_snack} to last you until the ripe old age of ${max_age}<br/><br/><hr/><br/>`);
































