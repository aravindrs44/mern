class Ninja {
    constructor (name, speed = 3, strength = 3, health = 10)  {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName()  {
        console.log(`Boku no na wa ${this.name} desu`);
    }

    showStats()  {
        console.log(`${this.name}:`);
        console.log(`   Strength - ${this.strength}`);
        console.log(`   Speed - ${this.speed}`);
        console.log(`   Health - ${this.health}`);
    }

    drinkSake()  {
        this.health += 10;
        console.log(`${this.name} drinks till the dawn!`)
    }
}

class Sensei extends Ninja  {
    constructor(name, wisdom = 10)  {
        super (name, 10, 10, 200, wisdom);
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        super.drinkSake();
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

