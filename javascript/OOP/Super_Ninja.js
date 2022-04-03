class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months')
    }
}