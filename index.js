class Car {
  constructor(make, model, year){
    this.make= make;
    this.model= model;
    this.year= year;

  }
  //getDescription (){
  //return(`The ${this.make} ${this.year} ${this.model} is a eye pleasing supercharded beast. `);
 // }
}


class ElectricCar extends Car {
  constructor(make, model, year, range){
  super(make, model, year);
  this.range = range;
  }

getDescription = () => {
  return(`The ${this.year}  ${this.make} ${this.model} can reach up to ${this.range} miles in range on one fully charged battery, making it suitable for long trips and daily commutes to work!`)
}
}

//Object.setPrototypeOf(ElectricCar,Car);


//const pCar = new Car('Charger', 'Hellcat', 2021);
//console.log(`Make: ${pCar.make}`);
//console.log(`Model: ${pCar.model}`);
//console.log(`Year: ${pCar.year}`);
//console.log(`Description: ${pCar.getDescription()}`);
//console.log("\n");




const eCar = new ElectricCar('Tesla', 'Model S', 2019 , 300);
console.log("🏎️⚡Electric Car Class\n");
//console.log(`Make: ${eCar.make}`);
//console.log(`Model: ${eCar.model}`);
//console.log(`Year: ${eCar.year}`);
//console.log(`Range: ${eCar.range}`);
console.log(`Description: ${eCar.getDescription()}`);
//console.log("\n");

  console.log(eCar instanceof ElectricCar);
