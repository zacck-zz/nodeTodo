var person =   {
  name: 'Zacck',
  age: 30
};
console.log(`Original  - ${person}`);
//variable assignment
function updatePerson(obj) {
  // obj= {
  //   name: 'Zacck',
  //   age: 27
  // };
  obj.age = 27;
};

updatePerson(person);
console.log(`Updated -  ${person}`);


//Array Example


var grades = [15,37];

//takes in the array and the grade to add
function addGrade(grades) {
  //push a grade into the array
  //arr.push(gr);
  //assign new value
  grades =  [67,90];
};

//if we do it like this
// function addGrade(arr) {
//   //here we give the array a different variable name
//   //js will create a new var and assign it to the value of the original
//   arr =  [78,89];
// };

addGrade(grades);

console.log(grades);
