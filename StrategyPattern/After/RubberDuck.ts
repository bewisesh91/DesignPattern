import { Duck } from './Duck';
import { FlyNoWay } from './FlyNoWay';
import { MuteQuack } from './MuteQuack';

export class RubberDuck extends Duck {
    public constructor() {
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new MuteQuack();
    }
    
    public display() {
        console.log('I am a Mallard Duck');
    }
}
