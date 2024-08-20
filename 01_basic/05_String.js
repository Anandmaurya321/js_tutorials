let s1="Hello "
let s2=" Anand"
let num=1;

// console.log(s1 + num + s2) ::: Outdated

// string interpritation

// console.log(`My name is ${s2}. My serial no. is ${num}.`)
// console.log(`My surname is ${s1}. My seriol number is  ${num}.`)

// New way to declear string :: 


const newstring= new String('Anand Maurya')
console.log(newstring)


//                       when running on console
// const newstring= new String('Anand Maurya')
// console.log(newstring)
// VM167:2 String {'Anand Maurya'}0: "A"1: "n"2: "a"3: "n"4: "d"5: " "6: "M"7: "a"8: "u"9: "r"10: "y"11: "a"length: 12[[Prototype]]: String[[PrimitiveValue]]: "Anand Maurya"



console.log(newstring[0]);
console.log(newstring[4]);
  
                                     // FUNCTIONS::::

                                     // toUpperCase function

console.log(newstring.toUpperCase())
                                    

                                     // Finding character at that index

console.log(newstring.charAt(2))

                                     //  Finding index of character

console.log(newstring.indexOf('t'))  // return -1 as it is not present 
console.log(newstring.indexOf('n'))  // return the first occurence 

                                    // Taking substring
const substring1= newstring.substring(0,6) // do not include 6th index element
console.log(substring1);

                                    // Slice the string
const substring2= newstring.slice(-1,7)  // we can give negative index in slice
console.log(substring2);

                                    // Triming starting and ending spaces

const name1="      Anand      "
console.log(name1)            // priniting before and after spaces 
console.log(name1.trim())               //  Trim before and after spaces 
 

                                     // Replace Function

const url="https://anand20%maurya.com";
console.log(url.replace('20%', '_'))     // It will replace and print https://anand_maurya.com 


                                    // Searching of substring

console.log(url.includes('anand'))   // print: true 
console.log(url.includes('sundaram'))  // print: false


                   
                                  // Split the string around some parameter

  const para="My name is Anand maurya. I am pursing B-tech. It is my secound Year"    
  
  const word=para.split(' '); // spliting on the basis of single space and the splited string get stored in array as 'array of string':: word became array of string
  console.log(word[3]);
  console.log(word[2]);
  console.log(word[12]);
  console.log(word)
  const word1=para.split('.');  // spliting on the basis of "Full-stop"

  console.log(word1[0]);
  console.log(word1[1]);
  console.log(word1[2])
  console.log(word1)








