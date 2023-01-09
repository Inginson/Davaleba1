// TASK 1

let sister = {
  firstName: 'ana',
  age: '28',
}

let brother = {
  firstName: 'levani',
  age: '21',
}

let difference = sister.age - brother.age;

let ageDifference = `ana levanze ${difference} wlit uprosia`;


console.log(ageDifference)


//TASK 2

// გვაქვს სტუდენტების სახელების კენტი სიგრძის მასივი 

const nameArr = ['John', 'Sam', 'Ann', 'Will', 'Andrew', 'Joseph', 'Lorelai', 'Amelie', 'Den',];

let nameArrLen = nameArr.length;


console.log(nameArrLen)

// let middleName = nameArr[(nameArrLen /2 ) +0.5]; ვერ ვხვდები  ამ დროს რატომ მიწერს ჯოზეფს.
// თუ 0-დან იწყებს ათვლას მაშინ 9-ს რატომ მიწერს კონსოლ ლოგ-ში ზემოთ

let middleName = nameArr[(nameArrLen - 1) / 2];

console.log(middleName)


//TASK 3

const student = {
  firstName: `saba`,
  lastName: `gelashvili`,
  age: 24,
  subject: [`math`, `biology`, `English`, `French`, `chemistry`],
  roomMate: {
    fullName: `vako seturi`,
    age: 24
  }
}

let fullName = student.firstName + student.lastName;
//fullName-ze სფეისი როგორ გავაკეთო სახელისა და გვარის შუაში?

let result = `${fullName} არის ${student.age} და მისი რუმმეითი არის: ${student.roomMate.fullName} `;

console.log(result)

//subjectArr = [`math`, `biology`, `English`, `French`, `chemistry`];
let subjectLen = student.subject.length;

for (let i = 0; i < subjectLen; i++)

  console.log(student.subject[i])



//TASK 4

const fruits = [`Banana`, `Orange`, `Apple`, `Mango`, 2, 12];

let d = 0;
while (typeof (fruits[d]) == `string`) {
  { console.log(fruits[d]); d++; }
}


const numberArr = [12, 23, 43, 11, 9, 2, 121, 90];



for (i = 0; i < numberArr.length; i++) {
  if (numberArr[i] > 31 & numberArr[i] % 2 == 0) {
    console.log('Element is greater than provided value and is EVEN')
  }
  else if (numberArr[i] < 31 & numberArr % 2 != 0) {
    console.log(`Element is less than provided value and is ODD'`)
  }
}
