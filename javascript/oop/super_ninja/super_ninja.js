class Ninja {
    constructor (name, speed = 3, strength = 3, health = 10)  {
        this.name = name;
        this.speed = speed;
        this.strength = strength;
        this.health = health;
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
        console.log(`Health: ${this.health += 10}`)
        // this.health += 10;
        console.log(`${this.name} drinks till the dawn!`)
    }
}

class Sensei extends Ninja  {
    constructor(name, speed, strength, health, wisdom = 10)  {
        super (name, speed = 10, strength = 10, health = 200);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        super.drinkSake();
    }

}

// example output
const ninnin = new Ninja("Ninnin");
const superSensei = new Sensei("Master Splinter");
console.log(ninnin); 
console.log(superSensei);
ninnin.sayName();


