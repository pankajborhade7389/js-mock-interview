console.log("Mock Interview Questions Preparation");

//Q.1= Give an example of Closures?

//Closures:- It is not something that we create manually, instead it is created automatically in certain situation.

const ticketBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`the count of passengers are ${passengerCount}`);
    };
};

const bookie = ticketBooking();//after line 14 function ticketbooking has finished its execution and now ceases to exits.

bookie();//1
bookie();//2
bookie();//3

console.dir(bookie);


//example-2
const allstudents = function(){
    let studentCount = 0;

    return function(){
        studentCount++;
        console.log(`The No of student is ${studentCount}`);
    };
};

const boys = allstudents();

boys();
boys();
boys();

console.dir(boys);


//Q.2 = Give example of call(), apply(), bind()

let plant1 = {
    Name : "Hawkins",
    location : "Thane"
}

let plant2 = {
    Name : "prestige",
    location : "Pune"
}

let plant3 = {
    Name : "vipul",
    location : "Nashik"
}

const showDetails = function(since,capacity){
    console.log(this.Name + " " + this.location + " " + since + " " + capacity)
}

//call method
showDetails.call(plant1,1950,200);
showDetails.call(plant2,1920,220);
showDetails.call(plant3,1980,230);

//apply method
showDetails.apply(plant1,[1800,20]);
showDetails.apply(plant2,[1700,30]);
showDetails.apply(plant3,[1600,40]);

//bind method
let result1 = showDetails.bind(plant1);
      console.log(result1);
      result1(1200,55);
let result2 = showDetails.bind(plant2);
      console.log(result2);
      result2(1100,56);
let result3 = showDetails.bind(plant3);
      console.log(result3);
      result3(1000,57);            


//Q.3 - write code to explain map & filter in arrays:      

//map,filter and reduce are one linear functions-
let arr4 = [1,3,6,8,11];
console.log(arr4.map((val) => val + 2));//3,5,8,10,13
console.log(arr4);//1,3.6,8,11

//filter=
//let arr4 = [1,3,6,8,11];
console.log(arr4.filter(val => val > 5));//6,8,11 //prints only those values whose conditions are met(greater than 5)



//Q.5 give example of Async & Await

// Async/Await - They are used to handle promises more effeciently. The word assync before a function always means that the function is supposed to return a promise. So, we therefore use async before a function to return a promise instead of the value that a normal function returns.
// Await in turn is used to await for the result that is to be returned from the promise.
// Await can also be used to make API calls.
/*
let getEmpID1 = new Promise((resolve,reject) => {

    setTimeout(() => {
        let id = [1,2,3,4,5];
        resolve(id);
        reject("Error in fetching the id details");
    },2000)
})
    let getEmpDetails = (data) => {
        return new Promise((resolve,reject) => {

            setTimeout((data) => {
                let empDetails = {
                    name : "Sky",
                    age : 23,
                }
                resolve(`The name of the employee is ${empDetails.name} and age is ${empDetails.age}`)
            },2000,data);
        })
    }

getEmpID1.then((empID) => {
    console.log(empID);
    return getEmpDetails(empID[1]);
    }).then((data)=>{
        console.log(data);
    }).catch((err) => {
    console.log(err);
}) 
*/


//Q.6 - Give an example of Inheritance using Function Constructor

//function constructor

//Eg.1
function Mobile(brand,weight,camera){
    this.brand = brand;
    this.weight = weight;
    this.camera = camera;
}

const apple = new Mobile("Apple",190,"16px");
const samsung = new Mobile("Samsung",210,"48px");

console.log(apple);
console.log(samsung);

//Eg.2
function Cooker(brand,since,marketcap){
    this.brand = brand;
    this.since = since;
    this.marketcap = marketcap;
}
const hawkins = new Cooker("Hawkins",1985,"25cr");
const prestige = new Cooker("Prestige",1960,"30cr");

console.log(hawkins);
console.log(prestige);



//Q.7  - explain self invoking function and its code?

//A self-invoking (also called self-executing) function is a nameless (anonymous) function that is invoked immediately after its definition. An anonymous function is enclosed inside a set of parentheses followed by another set of parentheses () , which does the execution. (function(){ console.log("pankaj");})();

function show(){
    document.write("Welcome to PrepBytes!!");
};
show();//we have to call in normal function to get output

(function(){
    document.write("Hello Welcome to PrepBytes!!");
})();//add paranthesis( start of the code and close it after code) and then just (); call this only

(function(){ 
    console.log("pankaj");
})();



//////////////////////     DOM    ///////////////////////////////////////
console.log("DOM");

//Q.1
function AddHeading(){
    const element = document.getElementsByTagName("h2")
    element[0].textContent = "MERN stack!!"
}

//Q.2
const element1 = document.getElementsByTagName("h1");
console.log(element1[0]);

element1[0].style.color = "red";

//Q.4
function ChangeText(){
    const element2 = document.getElementsByTagName("h3");
    element2[0].textContent = "Welcome to elevation Academy!!"
}

//Q.5
function HideText(){
    const element3 = document.getElementsByTagName("h4");
    element3[0].style.display = "none";
}

//Q.3

function time() {

    var hours = document.getElementById("hours")
    var minutes = document.getElementById("minutes")
    var seconds = document.getElementById("seconds")
    var ampm = document.getElementById("ampm")

    var time = new Date()

    var hrs = time.getHours()
    var mins = time.getMinutes()
    var secs = time.getSeconds()
    var am_pm = "AM"

    if (hrs == 0) {

        hrs = 12 //11:59AM -->00:00 _-->12:00
    }

    if (hrs > 12) {

        hrs = hrs - 12;
        am_pm = "PM"

    } //24 hrs format into 12hrs format

    if (hrs < 10) {

        hrs = "0" + hrs
    }

    if (mins < 10) {

        mins = "0" + mins
    }

    if (secs < 10) {

        secs = "0" + secs
    }

    hours.innerText = hrs
    minutes.innerText = mins
    seconds.innerText = secs
    ampm.innerText = am_pm

}

var oneseconds = 1000

setInterval(time, oneseconds)