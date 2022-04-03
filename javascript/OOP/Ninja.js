class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){s
        console.log(this.name)
    }

    showStats(){
        console.log('Ninja ${ this.constructor.name } has strength of ${ this.constructor.strength }, a speed of ${ this.constructor.speed }, and health of ${ this.constructor.health }.s');
    }

    drinkSake(){
        this.health += 10;
    }
}