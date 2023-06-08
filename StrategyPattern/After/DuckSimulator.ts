import { RubberDuck } from './RubberDuck';
import { FlyWithWings } from './FlyWithWings';
import { Quack } from './Quack';

class DuckSimulator {
    public static main(): void {
        console.log('Rubber Duck Initial Behavior');
        const rubberDuck = new RubberDuck();
        rubberDuck.performFly();
        rubberDuck.performQuack();

        console.log('');

        console.log('Rubber Duck New Behavior');
        rubberDuck.setFlyBehavior(new FlyWithWings());
        rubberDuck.performFly();
        rubberDuck.setQuackBehavior(new Quack());
        rubberDuck.performQuack();
    }
}

DuckSimulator.main();