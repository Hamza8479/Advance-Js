// Lecture: let and cost



// ES5
// var name5 = 'Hamza Zaman';
// var age5 = 22;
// name5 = 'Hamza Khan';
// console.log(name5);

// // ES6
// const name6 = 'Hamza Zaman'
// let age6 = 22;
// //name6 = 'Hamza';
// age6 =23;
// //console.log(name6);
// console.log(age6);


// ES5
// function drivingLicense5(passedTest){
//     if(passedTest){
//         var name = 'Hamza';
//         var age = 22;
//        // console.log(name + ' '+'is now allowed to drive a car' + ' bc he is of ' + age +' years old now');
//     }
//     console.log(name + ' '+'is now allowed to drive a car' + ' bc he is of ' + age +' years old now');
// }

// drivingLicense5(true);

// // ES6

// function drivingLicense6(passedTest){
//     let name;
//     const age = 22;
//     if(passedTest){
//          name = 'Hamza';
//          //age = 22;
//        // console.log(name + ' '+'is now allowed to drive a car' + ' bc he is of ' + age +' years old now');
//     }
//     console.log(name + ' '+'is now allowed to drive a car' + ' bc he is of ' + age +' years old now');
// }

// drivingLicense6(true);



// let i =22;

// for(let i=0; i<5; i++){
//     console.log(i);
// }

// console.log(i);


// var i =22;

// for(var i=0; i<5; i++){
//     console.log(i);
// }

// console.log(i);

//Lecture:
// Blocks and IIFEs

// ES6 IIFEs
// {
//     const a = 1;
//     let b =2;
//     var c =3;
// }

// //console.log(a + b);
// console.log(c);

// //ES5 IIFEs
// (function(){
// var c = 10;
// })();
//console.log(c);

//Lecture: Strings

// let firstName = 'Hamza';
// let lastName = 'Zaman';
// let yearOfBirth =1999;
// function calAge(year){
//     return 2021 - year;
// }

// // ES5
// console.log('This is ' +firstName+' '+lastName);

// //ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth} and now he is ${calAge(yearOfBirth)} years old`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('H'));
// console.log(n.endsWith('man'));
// console.log(n.includes(' '));
// console.log(firstName.repeat(5));
// console.log(`${firstName} `.repeat(5));



// Lecture: Arrow Function 

// const years = [1990, 1991, 1999, 2000];

// // ES5 
// var ages5 = years.map(function(el){
//     return 2021 - el;
// });

// console.log(ages5);

// //ES6
// // map method is used fro loop an array.

// // before arrow function we have argument then return statement.
// let ages6 = years.map(el => 2021 - el);
// console.log(ages6);

//  ages6 = years.map((el , index) => `Age element ${index +1}: ${2021 - el}`);
// console.log(ages6);

// // if you want more than one line of code then use curly braces.

// ages6 = years.map((el, index) => {
// const now = new Date().getFullYear();
// const age = now - el;
// return `Age element ${index +1}: ${age}`
// });

// console.log(ages6);



//**** Lecture: Arrow fuunctions 2 */

// ES5

// var boxes5 ={
//     color:'Green',
//     position: 1,
//     clickMe: function(){
//         document.querySelector('.div1').addEventListener('click',function(){
//             var str = 'This is box number ' + this.position + ' and it is ' +this.color;
//             alert(str);
//         });
//     }
// }
// boxes5.clickMe();

// In here this keyword point to the global object bc it is in some regular functio ni.e. addEventListner is some regular function
//when this keyword used in any method then it points to that object.
// doing this for nay reason we have a kind of hack 

// var boxes5 ={
//     color:'Green',
//     position: 1,
//     clickMe: function(){
//         var self = this;
//         document.querySelector('.div1').addEventListener('click',function(){
//             var str = 'This is box number ' + self.position + ' and it is ' +self.color;
//             alert(str);
//         });
//     }
// }
//boxes5.clickMe();

// order to avoid this hack we have some technique in ES6

// ES6

// const boxes6 ={
//     color:'Green',
//     position: 1,
//     clickMe: function(){
//         document.querySelector('.div1').addEventListener('click',()=>{
//             var str = 'This is box number ' + this.position + ' and it is ' +this.color;
//             alert(str);
//         });
//     }
// }
// boxes6.clickMe();

// using arrow function: the method share  the lexical this keyword from its surroundigs.  


// const boxes66 ={
//     color:'Green',
//     position: 1,
//     clickMe: () =>{
//         document.querySelector('.div1').addEventListener('click',()=>{
//             var str = 'This is box number ' + this.position + ' and it is ' +this.color;
//             alert(str);
//         });
//     }
// }
// boxes66.clickMe();

// now this is same as we did in ES5 version now this keyword points to the global object window.


// function person(name){
//     this.name = name;
// }

// // ES5

// person.prototype.myFriends5 = function(friends){
//     var arr = friends.map(function(el){
//         return this.name +' is friend with '+el;
//     }.bind(this));
//     console.log(arr);
// }
// var friends =['Ali', 'Munsif', 'Arslan'];
// new person('hamza').myFriends5(friends);


// //ES6

// person.prototype.myFriends6 = function(friends){
//     var arr = friends.map(el =>
//         `${this.name} is friend with ${el}`
//     );
//     console.log(arr);
// }
// var friends =['Ali', 'Munsif', 'Arslan'];
// new person('Saim').myFriends6(friends);


// Lecture: Destruction


// ES5   Array

// var hamza = ['hamza', 22];
// var name = hamza[0];
// var age = hamza[1];
// console.log(name);
// console.log(age);

// ES6    Array

// const [name, age] = ['hamza', 22];
// console.log(name);
// console.log(age);

// For object destructing directly assigned values
// const {firstName, lastName} = {firstName: 'Hamza', lastName:'Khan'};
// console.log(firstName);
// console.log(lastName);

// const obj ={
//     name: 'Hamza Zaman',
//     age: 22
// };

// const {name , age} = obj;
// console.log(name);
// console.log(age);

// const {name: a, age: b} = obj;
// console.log(a +' ' +b);

// function calRetAge(year){
//     const age = new Date().getFullYear() -year;
//     return [age, 65 - age];
// }

// const[age2, retirement] = calRetAge(1990);
// console.log(age2);
// console.log(retirement);


//  Lecture: Array


// const boxes = document.querySelectorAll('.box');

// ES5

//  var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(curr) {
//     curr.style.backgroundColor = 'dodgerblue';
// });

//ES6

//   const boxesArr6 = Array.from(boxes);
//   boxesArr6.forEach(curr => curr.style.backgroundColor = 'dodgerblue');
 //                   OR

 //Array.from(boxes).forEach(el => el.style.backgroundColor = 'dodgerblue');

 // ES5

//  for(var i=0; i < boxesArr5.length; i++){

//     if(boxesArr5[i].className=== 'box div2'){
//         // continue;
//         break;
//     }
//     boxesArr5[i].textContent ='I\'m changed to Blue';
//  }


 // ES6

//  for(const curr of boxesArr6){
//      if(curr.className==='box div2'){
//          continue;
//      }
//      curr.textContent ='I\'m changed to Blue';
//  }

//  for(const curr of boxesArr6){
//     if(curr.className.includes('div2')){
//         continue;
//     }
//     curr.textContent ='I\'m changed to Blue';
// }


// ES5

// var ages = [12, 14,8, 22, 20];
// var full = ages.map(function(cur){
//     return cur >=18;
// })
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);


// // ES6

// console.log(ages.findIndex(el => el>= 18));
// console.log(ages.find(el => el>=18));

// for(const a of ages){
//     console.log(ages.find(el => el>=18));
// }

// Lecture: Spread Operator

// apply method recieves ad array 

/*
function addFourAges(a ,b ,c, d){
    return a + b + c + d;
}
var sum = addFourAges(10, 20, 40, 60);
console.log(sum);

// ES5

var ages = [10, 20, 40, 60];
var sum1 = addFourAges.apply(null,ages);
console.log(sum1);

// ES6

const sum3 = addFourAges(...ages);
console.log(sum3);

const hamzaFamily = ['Hamza','Sherry','Adeel'];
const Family = ['Jazib','Haseeb','Haider'];
const bigFamily = [...hamzaFamily,'Saif',...Family];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
//Now convert node list into array by applying Array.From()
const all = [h, ...boxes];
Array.from(all).forEach(curr => curr.style.color='purple');


// Lecture: Rest Parameters

// spread operator used in the function call 
//and rest parameter used in the function declaration to accept an arbitrary number of parameters represent both by '...' three dots

// ES5
function isFullAge5(){
    console.log(arguments);
}

isFullAge5(1990, 2000, 1890,1869);

// here this act as object not an array we want this to act as array and for this we have hack.

function isFullAge55(){
    var arr5 = Array.prototype.slice.call(arguments);
    arr5.forEach(function(el){
        console.log((2021 - el) >= 18);
    })
}

isFullAge55(1990, 1999, 2003, 2004);

//ES6

 function isFullAge6(...years){
      years.forEach(el => console.log((2021 - el) >= 18));
 }

 isFullAge6(1990, 1999, 2006, 2004, 2002);
*/
/*
//ES5
function isFullAge5(){
    console.log(arguments);
}

isFullAge5(1990, 2000, 1890,1869);

// here this act as object not an array we want this to act as array and for this we have hack.

function isFullAge55(limit){
    var arr5 = Array.prototype.slice.call(arguments, 1);
    // this means that slice method starts to copy our arrray from position 1
    arr5.forEach(function(el){
        console.log((2021 - el) >= limit);
    })
}

isFullAge55(21, 1990, 1999, 2003, 2004);

console.log('ES6');

//ES6

 function isFullAge6(limit, ...years){
      years.forEach(el => console.log((2021 - el) >= limit));
 }

 isFullAge6(21, 1990, 1999, 2006, 2004, 2002);
*/

// Lecture: Default Parameter

// ES5

/*
 function khanPersons(firstName, yearOfBirth, lastName, nationality){

    lastName === undefined ? lastName = 'Khan' : lastName = lastName;
    nationality === undefined ? nationality = 'Pakistani' : nationality = nationality;
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
 }

 var hamza = new khanPersons('Hamza', 1990);
 var Sherry = new khanPersons('Shaheryar',2000,'Khan','Pak');

*/

 // ES6
/*
 function khanPersons(firstName, yearOfBirth, lastName='Khan', nationality='Pakistani'){

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
 }

 var hamza = new khanPersons('Hamza', 1990);
 var Sherry = new khanPersons('Shaheryar',2000,'Khan','Paki');


 // Lecture: MAP

 const question = new Map();
 question.set('question', 'What is tha major official name of latest JS version?');
 question.set(1,'ES7');
 question.set(2,'ES8');
 question.set(3,'ES9');
 question.set(4,'ES10');
 question.set('Correct',3);
 question.set(true,'Correct Answer');
 question.set(false,'Wrong answer, try again please');
 console.log(question.get('question'));
 console.log(question.get(1));
 console.log(question.get(2));
 console.log(question.get(3));
 console.log(question.get(4));
 console.log('Correct Answer is ' + question.get('Correct'));
 console.log(question.size);
 

 if(question.has(4)){
    //  question.delete(4);
 }

//  question.clear();

// question.forEach((value,key) => console.log(`This is ${key} and it is set to ${value}`));

for (let [key,value] of question.entries()){
    // console.log(`This is ${key} and it is set to ${value}`);
    if(typeof(key)==='number'){
        console.log(`Answer ${key}: ${value}`);
    }

}


const ans =  parseInt(prompt('Write the correct answer!'));

console.log(question.get(ans === question.get('Correct')));

*/

// Lecture: Classes

// ES5
/*
var person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

person5.prototype.calAge = function(){
    var age = new Date().getFullYear() -this.yearOfBirth;
    console.log(age);
}

var me5 = new person5('Hamza', 1999, 'Developer');
me5.calAge();

// ES6

class person6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calAge(){
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting(){
        console.log('I\'m not inherited');
    }
}

const hamza6 = new person6('Hamza',1999,'Developer');
hamza6.calAge();

person6.greeting();
// In classes we also create static class which was never inherited by the instance/object
*/

// Lecture: Classes and Subclasses

/*
var person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

person5.prototype.calAge = function(){
    var age = new Date().getFullYear() -this.yearOfBirth;
    console.log(age);
}

var athlete5 = function(name, yearOfBirth, job, olympicGames, Medals){
    person5.call(this,name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.Medals = Medals;
}

athlete5.prototype = Object.create(person5.prototype);

athlete5.prototype.wonMedals = function(){
    this.Medals++;
    console.log(this.Medals);
}

var hamza5 = new athlete5('hamza',1999,'Swimmer',3,10);
hamza5.calAge();
hamza5.wonMedals();


// ES6

class person6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calAge(){
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
}

class athlete6 extends person6{
    constructor(name, yearOfBirth, job, olympicGames, Medals){
      super(name, yearOfBirth, job);
      this.olympicGames = olympicGames;
      this.Medals = Medals;
    }
    wonMedals(){
        this.Medals++;
        console.log(this.Medals);
    }
}

const hamza6 = new athlete6('Hamza',1999,'Swimmer',2,10);
hamza6.calAge();
hamza6.wonMedals();

*/


// QUIZ


class parksAndStreets{
    constructor(name,buildYear){
         this.name = name;
         this.buildYear = buildYear;
    }
}

class Parks extends parksAndStreets{
constructor(name, buildYear, noOfTrees, Area){
    super(name, buildYear);
    this.noOfTrees = noOfTrees;
    this.Area = Area;
}
   treeDensity(){
       const density = this.noOfTrees/ this.Area;
       console.log(`${this.name} has a tree density of ${density} per square km.`);
   }

}

class Streets extends parksAndStreets{
    constructor(name,buildYear,length,size =3){
        super(name,buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreets(){
        const classification = new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        console.log(`${this.name} build in ${this.buildYear} is a ${classification.get(this.size)} street.`);
    }


}


const allParks = [ 
    new Parks('F9',1980,1100,4), new Parks('Jasmine',1990,900,4),new Parks('Iqbal',1970,300,2)
];

const allStreets = [
    new Streets('I-8', 1880, 2, 2), new Streets('F-8', 1890, 4, 4),new Streets('F-5', 1870, 6, 5),
    new Streets('I-10', 1880, 3)
];



function calc(arr){
    const sum = arr.reduce((prev, curr,index) => prev + curr, 0);
    return [sum, sum / arr.length];
}

function reportPark(p){
    console.log("-----Parks Report-----");

    // Density
    p.forEach(element => element.treeDensity() );

    // Average Age
     const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`our ${p.length} parks have an average of ${avgAge} years.`);

    // Which Park has more than 1000 trees

    const i = p.map(el => el.noOfTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees`);
}


function reportStreet(s){

    console.log('-----Streets Report-----');

    // Total and Average length of the town's Streets.
    
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // Cassify Streets.

    s.forEach(el => el.classifyStreets());

}

reportPark(allParks);
reportStreet(allStreets);