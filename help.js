const inquirer = require("inquirer")


// this function is called by the pet object
function askIfHappyv1(petObj){
  inquirer.prompt({
    type: "input",
    message: "Are you happy?",
    name: "happy"
  }).then( response => {
    if( response.happy === 'yes' ){
      petObj.wag()
    } else {
      petObj.sulk()
    }
  })
}

// This version has already been binded to the
// pet object; so I can use the this keyword below
function askIfHappyv2(){
  inquirer.prompt({
    type: "input",
    message: "Are you happy?",
    name: "happy"
  }).then( response => {
    if( response.happy === 'yes' ){
      this.wag()
    } else {
      this.sulk()
    }
  })
}



class Customer {
  constructor(name){
    this.name = name 
    this.pet = null
  }

  adopt(pet){
    this.pet = pet
  }

  spoilPet(){
    this.pet.purrFactor = "high"
  }

  getPetVaccinated(){
    this.pet.vaccineCount = this.pet.vaccineCount + 1;
  }
}


class Animal {
  constructor(name, breed, age, health, vaccineCount){
    this.name = name;
    this.breed= breed;
    this.age = age;
    this.health = health;
    this.vaccineCount = vaccineCount;
  }

  eat(){
    console.log("yummy")
  }

  wag(){
  console.log("wag!")
  }

  sulk(){
    console.log("sulk")
  }

  /* Because we are using inquirer for this, it's easier to make this a separate function. */
  areYouHappy(){
    /* There are two ways we can call the function: */
    //askIfHappyv1(this)          // v1: we pass in the pet obj to the function itself
    askIfHappyv2.bind(this)()   // v2: we bind the function directly to the object calling it
  }
}

class Dog extends Animal {
  constructor(name, breed, age, health, vaccineCount){
    super(name, breed, age, health, vaccineCount)
  }

  bark(){
    console.log("woof!")
  }
}

class Cat extends Animal {
  constructor(name, breed, age, health, vaccineCount, purrFactor){
    super(name, breed, age, health, vaccineCount)
    this.purrFactor = purrFactor;
  }

  chaseTail(){
    console.log("weeeeee!!")
  }

  meow(){
    console.log("meow")
  }
}


function start(){
  inquirer.prompt([
    {
      type: "input", 
      message: "What is the name of the dog?", 
      name: "name",
    },
    {
      type: "input", 
      message: "What is the breed of the dog?", 
      name: "breed",
    },
    {
      type: "input", 
      message: "What is the age of the dog?", 
      name: "age",
    },
    {
      type: "input", 
      message: "What is the health of the dog?", 
      name: "health",
    },
    {
      type: "input", 
      message: "What is the vaccine count of the dog?", 
      name: "vaccineCount",
    }
  ]).then( ({ name, breed, age, health, vaccineCount }) => {
    const newPet = new Dog( name, breed, age, health, vaccineCount )
    newPet.areYouHappy()
  })
}


start()

