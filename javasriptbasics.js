let name="oppah"
console.log(name)

// const age=21
// console.log(age)

// let isstudent = true
// console.log(isstudent)

// let city
// console.log(city)
// const cars = ["Range Rover","BMW","Benz","Lincoln",2,true]
// console.log(cars)
// const person={name:"oppah",
//     surname:"Matema",
//     age:21,
//     location:"Umwinzi",
//     sex:"female",
//     hobbie:["busketball","cooking","hiking"]

// }
// console.log(person)

// let colors=["red","pink","yellow","green","blue","black"]
// console.log(colors[0])

// console.log(colors[2])
// colors.push("violet")
// console.log(colors)
// colors.pop()
// console.log(colors)
// colors.shift()
// console.log(colors)
// colors.unshift("pink")
// console.log(colors)
// colors.length
// console.log(colors.length)
// colors.forEach((b)=>{
//     console.log(b)

// })
// colors.map((color )=>{
//     console.log(color)
// })
// // creating an object
// const student = {
//     name:"oppah",
//     age:30,
//     location:"Umwinzi",
//     gender:"female",

// }
// console.log(student.name)
// console.log(student.age)
// console.log(student.gender)
// console.log(student.location)
// //using bracket notation
// console.log(student["location"])
// console.log(student["gender"])
// console.log(student["name"])
// console.log(student["age"])
// //modifying object properties
// student.age=31
// console.log(student)
// student["age"]=31
// console.log(student)
// student["location"]= "Dallas"
// console.log(student)

// let age = 18
// if (age>= 18){
//     console.log("You are an adult.");

// }


let age =10;
if (age >= 18){
    console.log("adult");
}else if(age >= 13){
    console.log("teenager");
}else{
     console.log("minor")
}
let isMember = true
let discount = isMember?1:0;
console.log(discount) 
// switch statements
switch (age) {
    case 18:
        console.log("You just became an adult.");
        break;
    case 21:
        console.log("You can now drink alcohol.");
        break;
    default:
        console.log("Enjoy your youth!");
}
