class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    
    addEffect(target){
        if (this.stat == "resilience"){
            target.res += this.magnitude;
        }
        else if (this.stat == "power"){
            target.power += this.magnitude;
        }
    }
    
}

const rbn = new Unit ("Red Belt Ninja", 3, 3, 4);
const bbn = new Unit ("Black Belt Ninja", 4, 5, 4);
const Ha = new Effect("Hard Algorithm", 2, "increase target resilience by 3", "resilience", 3);
const Upr = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const Pp = new Effect("Pair Programming", 3, "increase target's power by 2", 2);

Ha.addEffect(rbn);
Upr.addEffect(rbn);
Pp.addEffect(rbn);
rbn.attack(bbn);