const employee={
    id: 1,
    name: 'Emmanuel',
    age: 36,
    department: "Fullstak Web Developer",
    address:{
        city: "Makati",
        country: "Kenya",
    },
};
//const id = employee.id;
//const name= employee.name;
//const age= employee.age;
//const department= employee.department;
//const address= employee.address; 
const {id:number, name:fullName, age, department, address:{city},address:{country}} = employee;
console.log(number, fullName, age, department, city, country);

// destructuring using functions.
const displayEmployee = function({age, name, department}){
    console.log(`My age is ${employee.age} yrs, name is  ${employee.name} and I am a ${employee.department}`);
}
displayEmployee(employee)

//destructuring ARRAYS
  //normal arrays.
const fruits =['apple', 'orange', 'banana', 'pineapple'];
const apple=fruits[0];
const orange=fruits[1];
const pineapple=fruits[2];
console.log(apple, orange, pineapple);

    //destructring the arrays
    const [fruit1, fruit2, fruit3, fruit4] =fruits;
    console.log(fruit1, fruit2, fruit3, fruit4);



//Destructuring both Arrays and Objects.
const groceryList=[
    {item:"Apples", price:25, category:"Fruits"},
    {item:"Mangoes", price:25, category:"Fruits"},
    {item:"Tomatoes", price:25, category:"Vegetables"},
    {item:"Milk", price:25, category:"Misc"},
    {item:"Eggs", price:25, category:"Misc"}
];
// accessing properties without destructuring
console.log(groceryList[0].item);

//accessing properties with destructuring
const [{item: apples,category: fruit}]=groceryList;
console.log(`The Item is: ${apples} and it falls in the category ${fruit}`);