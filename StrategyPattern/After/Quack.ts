import { IQuackBehavior } from './IQuackBehavior';

export class Quack implements IQuackBehavior {
    public quack() {
        console.log('Quack');
    }
}