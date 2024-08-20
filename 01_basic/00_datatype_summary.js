

                        //  Sumarry and Memory info
/*
 Primitive data_type:::

    7 Type :: Number , Bool , null , string , symbol ,Bigint(BIG INT)

    Reference data_type::::(Non Primitive data_type)
    3 type ::: Array , class , object



    Data_Type conversion:::
   Number()
   Boolean()
   String()


*/

// Data_Type : Symbol :: it return unique value for different variable
 
//  const id = Symbol("123")

//  const another_id= Symbol("123")

//  console.log(id)
//  console.log(another_id)
// console.log(id==another_id)


// // bigInt

// const a=123n;

// console.log(typeof(a))  // Output:: bigint


// // Array 

// let arr=["Anand","Anand kumar"]

// let obj={
//     name:"Anand",
//     class:14

// }

// let fun=function(){
//     console.log("Hello World")
// }

//:::::::::::::::::::::::::::::::::: memory:::::::::::::::::::::::::::::::::
/*
Two type of memory:  Stack memory(used for primitive data_type)
                  :  Heap memory(used for non-primitive data_type)

*/
//                           For primitive
let s1="Anand"
let s2=s1;  // value get copied
console.log(s2);
s1="addamy"
console.log(s1) // print "addamy"
console.log(s2) // print "Anand" :: it copy the value as it is primitive data_type // copy value

//                                For Non-primitive

// In non primitive, value stored in heap memory and there  address stored in variablea :: in sort "Pass By Reference" 
// if we change in non_primitive value it get change for all
// Ex:

let obj={
    name:"Anand maurya",
    email:"abc@gmail.com"
}

let objcpy=obj;   // address passed
objcpy.name="Adamay" // that make change in object

console.log(obj.name) // print: Adamay

console.log(objcpy.name) // Print: Adamay
