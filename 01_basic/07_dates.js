//                                Dates in java_Script
//                           Date is object in javascript

//let MyDates=new Date() //initialiding MyDates: By Default taking Present date::: 


// Here MyDates contain Present date (By Default)

// console.log(typeof(MyDates))  // object

// console.log(MyDates)  // Printing MyDates

// console.log(String(MyDates)) //converting dates into string
// //                        OR
// console.log(MyDates.toDateString())
// //                        OR
// console.log(MyDates.toString())

// console.log(MyDates.getDate()) // by using function

// console.log(MyDates.toISOString()) // ISOS STRING

// console.log(MyDates.toLocaleDateString)   // Local date string

// console.log(MyDates.toJSON())

// console.log(MyDates.toLocaleTimeString())

// we can also give our required date::: Ex-

//const myNewDate=new Date(2024,0,23) 
// here 2024 is the year , and '0' is the month denoting january (Zero indexing)
//  and '23' is the date of month                                       
// console.log(myNewDate.toDateString()) // it Print- Tue Jan 23 2024 


//const myNewDate=new Date(2024,0,23,5,30,10) // here '5' is hour '30'is minutes and '10' is secound
//console.log(myNewDate.toLocaleString())   // Print- 23/1/2024, 5:30:10 am

//we can also print in different formate also:::node js_basic/07_dates.js
// const myNewDate=new Date("2024-01-23") // In "yy-mm-dd" formate
// console.log(myNewDate.toLocaleString()) // It print- 23/1/2024 


// const myNewDate=new Date("01-23-2024") // In "mm-dd-yy" formate
// console.log(myNewDate.toDateString())  // it prinit- Tue Jan 23 2024  ie. month-date-year



//+++++++++++++++++++++++++++++++++++++  Time stamp  ++++++++++++++++++++++++++++++++



// calculating exact time of happening any things::::: Specialy used in Quizes , booking hotelss etc.
// it measure time in milli secound , taking "1 jan 1970 " as a reference ::::ex-



// let myTimeStamp=  Date.now() // finding time in millisecound from 1 jan 1970 to the present time:::
// console.log(myTimeStamp) // Printing "1722571261164" ::: it is the time in millisecound from that reference.  
// // Printing Different value as per the time of execution

// console.log(myNewDate.getTime()) // it gives time in milliSecound till that date::: now we can compaire values:::


// // If we want to convert milli secound into secound we have to divide it by 1000 and take the floor value of it::

// // ex-

// console.log(Math.floor(myNewDate.getTime()/1000))


let NewDate= new Date();
console.log(NewDate); // 2024-08-02T04:40:03.704Z

// for month
console.log(NewDate.getMonth()+1) // output: 8  (Gives Zero indexing so we have to add +1 to get the month in one indexing)
// for date
console.log(NewDate.getDate()) // 2 (give the date)
// for hours
console.log(NewDate.getHours()) // 10 (give hour of that time)
// for day
console.log(NewDate.getDay()) // gives day for monday-1 , Tuesday-2 ..... and so on....


// usually used as :::::::: 
 console.log(`today's date is ${NewDate.getDate()} and time in milli-secound is ${NewDate.getTime()}`)


 // We can also define as per our requirement::::
NewDate.toLocaleString('default', {
      weekday: "long" 
})


