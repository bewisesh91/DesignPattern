import { IFlyBehavior } from './IFlyBehavior';
import { IQuackBehavior } from './IQuackBehavior';

export abstract class Duck {
    public flyBehavior: IFlyBehavior;
    public quackBehavior: IQuackBehavior;

    public constructor() {
    }

    public performFly(): void {
        this.flyBehavior.fly();
    }

    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public setFlyBehavior(fb: IFlyBehavior): void {
        this.flyBehavior = fb;
    }

    public setQuackBehavior(qb: IQuackBehavior): void {
        this.quackBehavior = qb;
    }

    public swim(): void {
        console.log('All ducks float, even decoys!');
    }

    public abstract display(): void;
}

