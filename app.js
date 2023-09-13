console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
 class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;

    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

removeHobby(rmHobby) {
    let foundIdx = this.hobbies.indexOf(rmHobby);

    this.hobbies.splice(foundIdx,1);

}

greeting() {
    console.log("Hello fellow person!");
}
toString(){
    return Object.entries(this).toString();
}

info() {}

 }

 //Ex:2
class Coder extends Person {
    constructor(name,pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);

        this.occupation = occupation;
    
    }

    greeting() {
        console.log("Hello I am a coder!");
    }

    static from(person) {
        return new Coder(...Object.values(person));
    }

    }

 //Ex:3

  let coder = new Coder("Jake", 0, "Tampa", ["Lifting","Painting","Cooking"],"Student");

coder.addHobby("Jogging");

console.log(coder);

coder.removeHobby("Painting");

console.log(coder);

coder.greeting();

console.log(coder.toString());

let mike = new Person("Smith",0,"St Pete",["fishing","cooking"],"Construction");

let test = Coder.from(mike)

console.log(test);


// Ex:4

 class Calculator {
    result = 0;

    add(a,b) {
        if(b == undefined)
        this.result = a + b;
        return this.result;
    }
    subtract(a,b) {
        this.result = a - b;
        return this.result;
    }

    multiply(a,b) {
        this.result = a * b;
        return this.result;
    }

    divide(a,b) {
        this.result = a/b;
        return this.result;
    }

    display() {
        console.log(this.result);
    }
 }

 let calc = new Calculator();

 calc.add(0,1)
 calc.display()
 calc.subtract(5,3)
 calc.display()
 calc.multiply(1,3)
 calc.display()
 calc.divide(8,2)
 calc.display()