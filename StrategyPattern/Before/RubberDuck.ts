import { Duck } from './Duck';

class RubberDuck extends Duck {
    quack(): void {
        console.log('Squeak');
    }
    display() {
        console.log('I am a Mallard Duck');
    }
}

const rubberDuck = new RubberDuck();
rubberDuck.fly(); // unnecessary behaviors may be inherited in a subcalss

