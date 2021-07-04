class Ninja {
    constructor (name, health = 10)  {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
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
        console.log(`${this.name} drinks till the daybreak!`)
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
