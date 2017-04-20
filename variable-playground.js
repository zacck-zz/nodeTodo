var person =   {
  name: 'Zacck',
  age: 30
};
console.log(person);
//variable assignment
function updatePerson(obj) {
  // obj= {
  //   name: 'Zacck',
  //   age: 27
  // };
  obj.age = 27;
};

updatePerson(person);
console.log(person);
