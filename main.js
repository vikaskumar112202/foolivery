// const myArrow = () =>{
//     console.log(123);
// }
// myArrow();
// const print =()=> console.log("vikas kumar");
// print();
// const myArray =[1,2,3,4,5,6,7,8,9,0];
// myArray.push(22);//insert element to last index
// myArray.pop();//delete element from last index
// myArray.unshift(34);//insert element to 0 index 
// myArray.shift();//delete element from 0 index
// const myNewArray =myArray.slice(0,4);
// myArray.splice(6,8);
// console.log(myNewArray);
// console.log(myArray);

// function thisFunction(name,func){
//     console.log(name)
//     func();
// }
// thisFunction("vikas kumar",function(){
// console.log("Hi !")
// }
// )

// const myFun=function(num1,num2){
//     result=num1+num2;
//     return result;
// }
// console.log(myFun(3,8));

const cars=[
    "Ford Mustang",
    "Chevrolet Camaro",
    "Toyota Corolla",
    "Honda Civic",
    "BMW 3 Series",
    "Audi A4",
    "Mercedes-Benz C-Class",
    "Tesla Model S",
    "Nissan Altima",
    "Subaru Impreza",
    "Volkswagen Golf",
    "Porsche 911",
    "Hyundai Elantra",
    "Dodge Charger",
    "Kia Optima",
    "Lexus RX",
    "Mazda CX-5",
    "Ford F-150",
    "Chevrolet Silverado",
    "Jeep Wrangler",
    "Ram 1500",
    "Toyota Tacoma",
    "Honda Accord",
    "BMW X5",
    "Audi Q5",
    "Nissan Rogue",
    "Subaru Outback",
    "GMC Sierra",
    "Land Rover Range Rover",
    "Bentley Continental GT",
    "Rolls-Royce Phantom",
    "Ferrari F8 Tributo",
    "Lamborghini Aventador",
    "Bugatti Chiron",
    "Aston Martin Vantage",
    "McLaren 720S",
    "Dodge Durango",
    "Buick Enclave",
    "Volkswagen Passat",
    "Mitsubishi Outlander",
    "Acura MDX",
    "Lincoln Navigator",
    "Mini Cooper",
    "Cadillac Escalade",
    "Ford Bronco",
    "Toyota Highlander",
    "Honda CR-V",
    "Volvo XC90",
    "Infiniti QX60",
    "Chrysler Pacifica"
  ];
//   for( let i=0;i<49;i++){
//     console.log(cars[i])
//   }

// cars.map(function (item){
//     console.log(item);
// });
 
// cars.forEach(elements =>{
//     console.log(elements);
// })

// const filtered=cars.filter(element=>element=="Chrysler Pacifica");
// console.log(filtered);

const arr1=[1,2,3,4];
const arr2=[5,6,7,8];
// const newArr=arr1.concat(arr2);
// console.log(newArr);

// const greatertwo=arr1.every(element=> element>0);
// console.log(greatertwo);

// console.log(arr1.includes(4))
 
//  console.log(arr1.join(''));

// const found=arr1.find(element=>element>1);
// console.log(found);

// const indexFinder=arr1.indexOf(3);
// console.log(indexFinder);

// const lastIndexFinder=arr1.lastIndexOf(1);
// console.log(lastIndexFinder);

// const push=arr1.push(5);
// console.log(arr1);
 
// const pop= arr1.pop();
// console.log(arr1);

// const shift=arr1.shift(0);
// console.log(arr1);

// const unshift=arr1.unshift(1);
// console.log(arr1)
 

// MAKING OBJECT AND Destructure it

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     startEngine: function() {
//       console.log("The engine is now running.");
//     }
//   };
  
//   const{
//     make,
//     model,
//     year,
//     startEngine
//   } =car;


//  startEngine();
//  console.log(year)


// This keyword

// const container={
//     color:"black",
//     capacity:"50kg",
//     showInfo: function(){

//     console.log(`This is a ${this.color} container and its capacity is of ${this.capacity}.`);
//     },
//     showThis :function(){
//      console.log(this);
//     },
// }
// console.log(container.showInfo());
// container.showInfo();


const mystr=`The quick brown fox jumps over a lazy dog`;
console.log(mystr.toLowerCase());
console.log(mystr.toUpperCase());
console.log(mystr.charAt(5));
console.log(mystr.slice(0,8));
console.log(mystr.replace("quick" ,"lazy"));
console.log(mystr.length);
console.log(mystr.split(" "));
console.log(mystr.indexOf("lazy"));
console.log(mystr.lastIndexOf("lazy"));
