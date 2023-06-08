import { IFlyBehavior } from './IFlyBehavior';

export class FlyNoWay implements IFlyBehavior {
    public fly(): void {
        console.log('I cannot fly');
    }
}