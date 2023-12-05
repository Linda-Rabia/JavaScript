//If we want to store text, we must enclose it in single or double quotes or in backticks.
console.log("Linda");
console.log("hello");
// checking the type of a variable that stores text.
let text = "hello";
console.log(typeof text);
// reassign variables with Booleans.
let isOnSale = true;
console.log(isOnSale);
isOnSale = false;
console.log(isOnSale);
let isTrue;
isTrue = true;
console.log(isTrue);
console.log(Boolean(100));
console.log(Boolean(100));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-5));
//The first operator we explore is the Equal to (==) operator. It checks if two values are equal.
const priceOne = 5;
const priceTwo = 10;
//console.log(priceOne == priceTwo);
//Now, priceOne and priceTwo have the same value.
const priceThree = 10;
const priceFour = 10;
console.log(priceThree == priceFour);
// the Not Equal to (!=) operator. It checks if two values are not equal. 
const priceFive = 5;
const priceSix = 10;
console.log(priceFive != priceSix);
// The Greater than (>) operator checks if the left value is greater than the right value.
const priceSeven = 5;
const priceEight = 10;
 console.log(priceSeven > priceEight);
console.log(priceEight > priceSeven);
//The Less than (<) operator checks if the left value is less than the right value.
const priceNine = 5;
const priceTen = 10;
 
console.log(priceNine < priceTen);
console.log(priceTen < priceNine);
// there are also the Less than or equal (<=) and Greater than or equal (>=) operators. 
const priceEleven = 10;
const priceTwelve = 15;
const priceThirteen = 10;
 
console.log(priceEleven >= priceTwelve);
console.log(priceEleven >= priceThirteen);
//the typeof operator is used to find out the type of a value or variable.
console.log(typeof 1);
const num = 1;
console.log(typeof num);
//Variables, as their name suggests, can store data that will vary. 
let  steps  =  100;
 console.log(steps);  
 steps  =  120;  
 console.log(steps);
 steps  =  steps  +  200;
 console.log(steps);
 //In the blocks that we create using curly brackets, there is a set of instructions, which for some reason should be treated independently. 
 let  counter;
  console.log(counter);
 {
           counter  =  1;
          console.log(counter); 
 }
 counter  =  counter  +  1;
 console.log(counter);  
 // the scopes of variables (and constants) declared with let and const look slightly different than those declared with var.
 let  height  =  200;
  {
           let  weight  =  100;
  {
             let  info7  =  "tall";
              console.log(height);  
                console.log(weight);  
                  console.log(info7);  
 }
          console.log(height);  
          console.log(weight);  
          //console.log(info7); 
 }
 //tableee
 let title1 = 'Name';
title2 = 'Phone';
title3 = 'Email';

console.log(title1, ' ',' ', ' ',' ',' ', ' ',' ',  title2,' ',' ', ' ',' ', ' ',' ',' ', ' ',' ', title3);


//Maxwell wright

let Name = 'Maxwell wright';
Phone = '(0191) 719 6495';
Email = 'Curabitur.egestas.nunc@nonummyac.co.uk'
console.log(Name,' ',Phone, ' ', Email);


//Raja Villarreal
let Name1 = 'Raja Villarreal';
Phone = '0866 398 2895';
Email = 'posuere.vulputate@sed.com'
console.log(Name1,' ',Phone, ' ', Email);

//Helen Richards
let Name2 = 'Helen Richards';
Phone = '0800 1111';
Email = 'libero@convallis.edu'
console.log(Name2,' ',Phone, ' ',' ',' ', Email);
var  globalGreeting  =  "Good  ";
   

