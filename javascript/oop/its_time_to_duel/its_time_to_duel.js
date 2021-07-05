class Card  {
    constructor(name, cost)  {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card  {
    constructor(name, cost, power, res)  {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target)  {
        target.res -= this.power;
    }
}

class Effect extends Card  {
    constructor(name, cost, text, stat, mag)  {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }

    play (target)  {
        if (target instanceof Unit)  {
            target.stat + this.mag;
            console.log(this.text);
        }
    }
}

red_belt_ninja = new Unit("Red Belt Ninja", 3, 3, 4);
hard_algorithm = new Effect("Hard Algorithm", 2, "Increases target's resilience by 3", "res", 3);
hard_algorithm.play(red_belt_ninja);
black_belt_ninja = new Unit("Black Belt Ninja", 4, 5, 4);
unhandled_promise_rejection = new Effect("Unhandled Promise Rejection", 1, "Reduces target's power by 2", "power", -2);
unhandled_promise_rejection.play(red_belt_ninja);
pair_programming = new Effect("Pair Programming", 3, "Increases target's power by 2", "power", 2);
pair_programming.play(red_belt_ninja);

