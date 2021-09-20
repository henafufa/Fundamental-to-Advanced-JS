/* imports */
// import * as Math from './math'; //access all return value using named import 
// import {add, multiply, divide } from './math'; //access specified value using named import
// import Animal from './animal'; //default import 
// import { coroutine as co} from 'bluebird';

console.log('Async');

// =================== Fundemental and core javascript features ====================

// Variables
console.log('---------------- VARIABLES -----------------');
var user= "js";
var empty= undefined;
console.log(user + " type = "+ typeof user);
console.log(empty + " type = "+ typeof empty);

// Objects
console.log('\n---------------- OBJECTS AND DISPLAY OBJECTS VALUE -----------------');
var person={
    name:"js",
    age:18,
    status:"active",
    address:{
        city:"Ambo",
        kebele:01
    }
}
console.log(person); //prints objects
console.log(JSON.stringify(person)); //prints objects as string
console.log(person.name); //returns single value
console.log(Object.values(person)); // returns all values of that object as array except for nested object, it returns the object it self for nested object
console.log(person.address); //returns address object
console.log(person.address.city); ///returns single value

// Arrays
console.log('\n---------------- ARRAYS AND LOOPING  -----------------');
var persons= ["PR1","PR2","PR3"];
var collect= ["PR4",45,{city:"ambo",state:2}, undefined]; //possible but not adviceable
console.log(persons); //returns all array values
console.log(collect); //returns all array values
console.log(persons[1]) //returns single value based on position
// looping through array
for(var n of persons) {
    console.log(n) 
};
for (var i=0; i< persons.length; i++){
    if(i == 0){
        continue;
    }
    console.log(persons[i])

};
persons.forEach((n, index) => {
    console.log(index + " = " + n)
});

// Functions
console.log('\n---------------- FUNCTIONS -----------------');
function compute(n1,n2){
    return n1 + n2;
};
console.log(compute(1,8));

// If statement
console.log('\n---------------- IF CONDITION -----------------');
if(person.age > 18){
    console.log(person.name + "is more than eighten");
}
else if(person.age == 18){
    console.log(person.name + "is eighten")
}
else{
    console.log(person.name + "is less than eight")
}

//switch 
console.log('\n---------------- SWITCH CONDITION -----------------');
switch(true){
    case (person.age > 18):
        console.log(person.name + "is more than eighten");
    case (person.age == 18):
        console.log(person.name + "is eighten")
   default:
        console.log(person.name + "is less than eight")
}

// map | filter |reduce
console.log('\n---------------- MAP, FILTER AND REDUCE -----------------');
var map = [1,2,3].map(function(n){
    return n+2;
});
console.log(map);

var filter= [1,2,3,4].filter(function(n){
    return n % 2 == 0;
});
console.log(filter);

var reduce= [1,2,3,4].reduce(function(accumulator, current){
    return accumulator + current;
});
console.log(reduce);


//callbacks
console.log('\n---------------- CALLBACKS -----------------');
function callbackExample(name, callback){
   console.log(callback(name));
}; 
callbackExample("js", function(name){
    console.log("hello" + name);
});

console.log("\n=================== Advanced javascript features====================");
// modules - named imports and exports
console.log('\n---------------- NAMED IMPORTS AND EXPORTS -----------------');
// console.log(Math.add(3,4));
// console.log(Math.divide(8,4));
// var animal= new Animal();
// console.log(animal.getClassType());

// Variable scope and let keyword
console.log('\n---------------- VARIABLE SCOPE AND LET KEYWORDS -----------------');
let name= 'Js'; // reassignment is possible incase of let
name=2;
console.log(name); 
const name2 = 'Js' //reassignment is not possible incase of const
// name2 = 2;
// console.log(name); // error because re assignment not possible here
const person2= {};
person2['name']='Js';
const personArray=[];
personArray.push('Js');
console.log(person2,personArray);

// Template literals
console.log('\n---------------- TEMPLATE LITERALS -----------------');
console.log('name:' + person2['name'] + name2);
console.log(`name:${person2['name']}${name2}`); //using template literal

// Spread operator arrays
console.log('\n---------------- SPREAD OPERATOR ARRAYS -----------------');
var array1=['Js','Java','C#'];
var array2=['Python','Kotlin','Ruby'];
var concatArray= [...array1, ...array2];
concatArray.forEach(function(languages){
    console.log(languages);
});
var programming1= 'JS';
var programmingArray=[...programming1];
programmingArray.forEach(function(character){
    console.log(character);
});
var addNumbers= function(n1,n2){
    return n1 * n2;
};
var numbers= [4,5];
console.log(addNumbers(numbers)); //gives NAN
console.log(addNumbers(...numbers)); // equals with addNumbers(numbers[0], numbers[1]);

// Spread Operator Objects
console.log('\n---------------- SPREAD OPERATOR OBJECTS -----------------');
var address= {
    city: 'ambo',
    country: 'Ethiopia'
}

var personal={
    name: 'James',
    age:'60'
}
// one way which is longer
var profile={
    name: personal.name,
    age: personal.age,
    city: address.city,
    country: address.country,
}
console.log(profile);
// second way = which is best and short
var myprofile={ ...personal, ...address };
console.log(myprofile);

// Arrow functions
console.log('\n---------------- ARROW FUNCTIONS -----------------');
const arrowfunc1 = (a,b) =>{
    return a+ b;
}
var arrowfunc2 = (a,b) => a+b;
var arrowfunc3 = a => a +2 ;
console.log(arrowfunc1);

// lexical and this
console.log('\n---------------- LEXICAL AND THIS -----------------');
const Javascript= {
    name: 'js',
    versions:['v1','v2'],
    toString: function (){
        // console.log(`${this.name} has ${this.versions}`);
        this.versions.forEach((version)=>{ 
            console.log(`${this.name} has ${version}`); //this.name is not work if we use function(version){} instead of arrow function
        });
    }
};
Javascript.toString();

// Enhanced Object properties - gives us a better syntax or coding when we work with objects
console.log('\n---------------- ENHANCED OBJECT PROPERTIES -----------------');
const PRICE= 'Price';
const calculator = (name,price)=>{
    return{
        name,
        add(n1,n2){
            return n1 + n2;
        },
        [PRICE.toLocaleLowerCase()]:price
    }
};
const calc= calculator('Js',200);
console.log(calc.name, calc.price,calc.add(30,50));

// Array Destructuring
console.log('\n---------------- ARRAY DESTRUCTURING-----------------');
const peoplenames= ['james','charles','yobsan','john'];
const james= peoplenames[0];
const charles = peoplenames[1];
console.log(`${james},${charles}`); // this is the old and longest way rather using array destructuring is the better
const [jame,charle,...restofnames]= peoplenames; //this is called array destructring
console.log(`${jame},${charle}`);
console.log(`${james}` + ' ' + restofnames);

// Object Destructuring
console.log('\n---------------- OBJECT DESTRUCTURING-----------------');
const getUserInfo = () =>{
    return {
        username:'james',
        address:{
            country:'Ethiopia',
            city:'AA',
            fulladdress:{
                street:'AM 02'
            }
        },
        age:23
    }
};
const getUser= getUserInfo();
const username= getUser.username;
const street = getUser.address.fulladdress.street;
console.log(username,street); // the old and longest way it is better if we used object destructuring
const {username: myname,age, address:{ country : mycountry},address:{fulladdress: {street : mystreet}}} = getUser; //this is called object destructuring
console.log(myname,age,mycountry,mystreet);

// function default parameters
console.log('\n---------------- FUNCTION DEFAULT PARAMETERS-----------------');
const calculatePay= (salary, bonus = {
    teamBonus: 0,
    employeeBonus: 0}) => {
    return salary + bonus.teamBonus + bonus.employeeBonus;
}
console.log(calculatePay(3000)); // In this case defualt parameters used for bonus which is bonus.teamBonus=0 and bonus.employeeBonus=0
console.log(calculatePay(3000, {teamBonus:2000, employeeBonus: 1000}));

// Creating classes and static method
console.log('\n---------------- CREATING CLASSES AND STATIC METHODS -----------------');
class Animal{
    constructor(name,age){
        console.log(`${name} ${age}`);
        this.name= name;
        this.age= age;
    }
    getName(){
        console.log(`The dog named ${this.name}`);
    }
    getAge(){
        console.log(`${this.name} is ${this.age} years old`)
    }
    static staticMethod(){
        console.log('I am static method in an animal class');
    }
}
Animal.staticMethod(); //calling static method directly using class name without instantiating the class
const bobby= new Animal('Boby',3);
bobby.getName();

// Classes inheritance 
console.log('\n---------------- CLASSES INHERITANCE -----------------');
class Dog extends Animal {
    constructor(name,age,breed){
        super(name,age);  //invoke parents which is animal class constructor
        this.breed=breed;
    }
    logBreed(){
        console.log(`${this.name} is ${this.age} years old and ${this.breed}`);
    }
}
const whisky= new Dog('Whisky',2,'Bulldog');
whisky.logBreed();
whisky.getName();

// Creating promises

const promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log('\n---------------- CREATING PROMISES -----------------');
        resolve('Data received from database');
    },2000);
    setTimeout(()=>{
        reject('No data returned from database');
    }, 3000);
});
promise.then( response =>{
    console.log(response);
}).catch( error => {
    console.log(error);
});

// Promise.all demonstration
const firtsNamesPromises = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('\n---------------- PROMISE.ALL -----------------');
        resolve(['james','charlie','john','jack']);
    },2000);
    setTimeout(()=>{
        reject('No data received');
    },3000);
});
const lastNamesPromises = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(['bond','watters','legend','poll']);
    },2000);
    setTimeout(()=>{
        reject('No data received');
    },3000);
});
Promise.all([firtsNamesPromises,lastNamesPromises]).then( data =>{
    const [firstnames, lastnames] = data;
    for(let i= 0; i < firstnames.length; i++){
        console.log(`${firstnames[i]} ${lastnames[i]}`);
    }
}).catch( error =>{
    console.log(error);
});

// Promises and fetch Api - api used from randomuser.me
const getRandomUser = (n) =>{
    const fetchRandomUser= fetch(`https://randomuser.me/api/?results=${n}`);
    fetchRandomUser.then( response =>{
        console.log('\n---------------- PROMISES AND FETCH API -----------------');
        // console.log(response.json());
        response.json().then(randomUser =>{
            console.log( randomUser);
            randomUser.results.forEach( user =>{
                const {name: { first : firstName, last: lastName },email }=user;
                console.log(`${firstName} ${lastName} ${email}`);
            })
        }).catch(error =>{
            console.log(error)
        });
    });
};
getRandomUser(5);

// Creating generators
console.log('\n---------------- GENERATORS -----------------');
const getSet=  function* () {
    yield 1;
    yield 'name';
    yield true;
    yield { name:'Js'};
    return 'Done'
}
const getNumGenerator = getSet();
console.log(getNumGenerator.next());
console.log(getNumGenerator.next().value);
console.log(getNumGenerator.next().value);
console.log(getNumGenerator.next().value);
console.log(getNumGenerator.next().value);

const getNumbers= function* (numbers){
    for(let i=0; i < numbers.length;i++){
        yield numbers[i];
    }
}
const getNumbersGen= getNumbers([1,2,3,4,5]);
const interval= setInterval(()=>{
    const next= getNumbersGen.next();
    if(next.done){
        console.log('This generator is done');
        clearInterval(interval);
    }
    else{
        const nextValue= next.value;
        console.log(nextValue);
    }
},1000);

// Genarators and promises with coroutines - it is ES6 coolest feature
console.log('\n---------------- GENERATORS AND PROMISES -----------------');
const getSetGen= co(function*(n){
    const fetchRandomUser= yield (`https://randomuser.me/api/?results=${n}`);
    const data= yield fetchRandomUser.json();
    return data
});
getSetGen(5).then(randomUser =>{
    randomUser.results.forEach( user =>{
        const {name: { first : firstName, last: lastName },email }=user;
        console.log(`${firstName} ${lastName} ${email}`);
    });
})
.catch(error =>{
    console.log(error)
})

// Async await
console.log('\n---------------- ASYNC AWAIT -----------------');
const getSetAsync = async n => {
    try {
        const fetchRandomUser= await (`https://randomuser.me/api/?results=${n}`);
        const data = await fetchRandomUser.json();
        data.results.forEach( user =>{
            const {name: { first : firstName, last: lastName },email }=user;
            console.log(`${firstName} ${lastName} ${email}`);
        });
        return data
    } catch (error) {
        console.log(error);
    }
   
};
getSetAsync(2);
// async function nameCapitalization(name){
//     const getNameValue= new Promise((resolve, reject)=>{
//         setTimeout(()=>resolve(name.toUpperCase()),2000);
//         const result= await getNameValue;
//         return result; //returns promise
//     });
// }
// nameCapitalization('async awit').then((res)=>{
//     console.log('The result from async function'+ res);
// }).catch( error =>{
//     console.log(error);
// })

