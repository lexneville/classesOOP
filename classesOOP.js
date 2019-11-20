// let person1 = {
//     name: "Dave",
//     age: "52",
//     email: "dave@email.com",
//     phone: 7323565343,
// }

// let person2 = {
//     name: "Bob",                            // This code is very inefficient as we are repeating ourselves. 
//     age: "25",
//     email: "bob@email.com",
//     phone: 7909747363,
// }

// let person3 = {
//     name: "Lisa",
//     age: "34",
//     email: "dave@email.com",
//     phone: 7834782746,
// }

// //-------------------------------------------- We can use classes to cut out unnecessary code -------------------------------

// class Player {
//     constructor(name, sport, yearsExp) {
//          this.playerName = name;
//          this.playerSport = sport;
//          this.playerYearsExp = yearsExp;
//     }
//     run() {
//          console.log(`${this.playerName} knows how to run`);
//     }
// }

// const mikeTyson = new Player("Mike Tyson", "Boxing", 30); // This line passes values into the constructor

// console.log(mikeTyson.playerName);
// console.log(mikeTyson.playerSport);
// mikeTyson.run();

// const chrisRon = new Player("Christiano Ronaldo", "Football", 18);
// console.log(chrisRon.playerName);
// console.log(chrisRon["playerSport"]);

//----------------------------  ACTIVITY ------------------------------------

// class Pokemon {
//     constructor(name, type, hp) {
//         this.pokeName = name;
//         this.pokeType = type;
//         this.pokeHP = hp;
//     }
//     eat() {
//         console.log(`${this.pokeName} likes to eat`)
//     }
// }

// const charizard = new Pokemon("Charizard", "Fire", 20);
// const pikachu = new Pokemon("Pikachu", "Electric", 15);

// charizard.eat();
// console.log(pikachu["pokeName"]);

//-------------------------- SUB CLASSES -------------------------------------

class Player {
    constructor(name, sport, yearsExp) {
         this.playerName = name;                    // This is public data available to be called by any CHILDREN/INSTANCES/OBJECTS in any sub-classes under the PARENT class, Player
         this.playerSport = sport;
         this.playerYearsExp = yearsExp;
    }
    run() {
         console.log(`${this.playerName} knows how to run`); // This is a public function available to be called by CHILDREN/INSTANCES/OBJECTS of the SUB-CLASS Golf
    }
}

class Golf extends Player {                 // 'GOLF' is a sub class, it is a CHILD of the PARENT 'PLAYER' class
    constructor(name, sport, yearsExp, handicap) {
        super(name, sport, yearsExp);
        this.playerHandicap = handicap;             // This is private data available to be called ONLY by CHILDREN/INSTANCES/OBJECTS of the SUB-CLASS Golf
    }

    playGolf() {                                // This is a private function available to be called ONLY by CHILDREN/INSTANCES/OBJECTS of the SUB-CLASS Golf
        console.log(`${this.playerName} knows how to play golf`)
    }
}

const tigerWoods = new Golf("Tiger Woods", "Golf", 20, "Master");

console.log(tigerWoods.playerName);
console.log(tigerWoods.playerHandicap);
tigerWoods.run();
tigerWoods.playGolf();

class Basketball extends Player {
    constructor(name, sport , yearsExp, shirtNumber) {
    super(name, sport, yearsExp);
    this.playerShirtNumber = shirtNumber;           // This is private data available to be called ONLY by CHILDREN/INSTANCES/OBJECTS of the SUB-CLASS Basketball
    }
    slamDunk() {                            // This is a private function available to be called ONLY by CHILDREN/INSTANCES/OBJECTS of the SUB-CLASS Basketball
        console.log(`${this.playerName} knows how to slam dunk`)
    }
}

const kobbie = new Basketball("Koby Bryant", "Bastketball", 20, 8); // Adds a new instance within the Basketball sub-class

console.log(`${kobbie.playerName}'s shirt number is ${kobbie.playerShirtNumber}`);
tigerWoods.playGolf();
tigerWoods.run();
kobbie.slamDunk();
kobbie.run();

