page.js
// // networking / internet / ip



// //შემოწმება დაინსტალირდა თუ არა - node -v
// console.log('hello world!')
// console.log('hello world 2!')
// //ctrl+alt+n

// console.log('hello world 3!')
// console.log('hello world! 4')

//ცვლადი / ტიპი 
//variable / type
//let ; const ; var

//primitive types - პრიმიტიული ცვლადები
let name = `John`; //string
let age = 18; //number
let canBuyAlcohol = false; //boolean
let birthdayEventPlace = null; //null
let phoneNumber = null;
let gveshvelebaRame = undefined; //undefined

//referrence types - მიმთითებლების ტიპები
//object literals


const phone = {
  brand: 'apple',
  model: 'SE',
  version: 'vol.2',
  releaseYear: '2020',
  price: 1500,
  currency: 'GEL',
  eSim: true,
  systemSet: {
    ram: 64,
    space: 128
  }
} //Object

// I wan't to sell (brand) (model) and version is (version) and space is (space)
phone.brand = 'Samsung';
//String Literlas                    //placeholder
const advertText = `I wan't to sell ${phone.brand} ${phone.model} and version ${phone.version}`;

const propertyName = 'price';

const phonePriceVal = phone[propertyName]; // == phone.brand
phone.advert = advertText;
// delete phone.brand;


//camelCase - variable , functions/methods

let soccerCaptainName = 'Sam';

//PascalCase - class / interface

// class HumanBody {

// }


//SNAKE_CASE - constant variable

const SALARY_TAX = 22;

// Array

const kilogramsArr = [12, 34, 54, 6, 7, 8, 10];
//0  1   2  3 4 5 6
const usersData = [{ userName: 'troley', email: "random@gmail.com" }, { userName: 'user111', email: "user11@gmail.com" }]

console.log(usersData)
let kilogramsArrLen = kilogramsArr.length;

let lastKilogram = kilogramsArr[kilogramsArr.length - 1];
//i++ or i+= 1 or i = i + 1; 
// for(let i = 0; i < kilogramsArr.length; i++) {
//     console.log(kilogramsArr[i])
// }

// let i = 0;
// while(i < kilogramsArr.length) {
//     console.log(kilogramsArr[i]);
//     i++;
// }

let i = 0;
const BREAK_VALUE = kilogramsArr.length; //7
// while(true) {
//     if(i == BREAK_VALUE) break;
//     console.log(kilogramsArr[i])
//     i++;
// }

//comparion operators / math operators / logic operators
let testName = 'sagasfa';
console.log(typeof typeof i)