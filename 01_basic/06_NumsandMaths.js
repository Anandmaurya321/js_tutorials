// const num=400;
// const num1=new Number(400);
// console.log(num)
// console.log(num1)
// //                                      Functions()

// //                                  To convert into String

// console.log(num1.toString());
// console.log(num1.toString().length);


// //                                    toFixed() function

// // it defines the number of decimal point ::::

// const decnum1=456.94943  // Output: will be roundoff to the two decimal that is 456.95 and it is a string. 
// console.log(decnum1.toFixed(2))

// const decinum2=45
// console.log(decinum2.toFixed(3))


// //                                  toPrecision() function

// // it print the number in required precision ::: and it return the string value::: it also roundoff value if required during precision

// console.log(decinum2.toPrecision(9))  // it print : 45.0000000 as it require 9 precision
// console.log(decnum1.toPrecision(7))   // it get roundoff and print 456.9494 for 7 precision
// console.log(decnum1.toPrecision(1))   // it return 5e+2 for 2 precision



// //                                 toLocalstring() Function

// // it print the numbers in the form of string with ',' which make easy to understand

// const largeValue=BigInt(784930238)
// console.log(largeValue.toLocaleString())
// console.log(largeValue.toLocaleString('en-IN'))

// console.log(Number.MAX_SAFE_INTEGER)// Maximum safe Integer
// console.log(Number.MIN_SAFE_INTEGER) // Minimum safe integer
// console.log(Number.MAX_VALUE) // Maximum possible value



//  +++++++++++++++++++++++++++++++++++  MATHS  +++++++++++++++++++++++++++++++++++++++++++


//                                      FUNCTIONS()

// console.log(Math) // it is an Object
// //                                   absolute Functon()
// // return abosolute value
// console.log(Math.abs(-38))  

// //                                     round function()
// // return round-off integer (nearest integer)
// console.log(Math.round(47.98))
// //                                     ceil Function()
// // return upper Integer
// console.log(Math.ceil(4.1));

// //                                       floor function()
// // return lower integer
// console.log(Math.floor(4.9))

// //                                       power function()
// // pow(a,b) return: a to the power b
// console.log(Math.pow(2,5))

// //                                       min function()
// // return minimum value in given number
// console.log(Math.min(2,-5,7,98,-3,2,6,1,-43,56))

// //                                        Max functon()
// // return maximum value among given number
// console.log(Math.max(47,67,24,21,13,87,74))


//                                         Math.random() function
// it returns random value b/w (0 and 1) can be 0 and 1 also :::

// console.log((Math.random)) // print random value b/w [0,1]


// console.log((Math.random*100))// print random value b/w [0,100]


// console.log((Math.random*100)+1) // print random value b/w [1,101]


// console.log(Math.floor((Math.random*100))) // give the lower integer


// console.log(Math.ceil((Math.random*100))) // give the Upper integer


// if you want to have value b/w any range ...

// ex: If you want value b/w 10 and 20::: then

const min=10
const max=20

console.log(Math.floor((Math.random()*(max-min))+min)) // have range b/w min and max (including min and max)