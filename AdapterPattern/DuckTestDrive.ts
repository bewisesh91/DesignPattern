import { IDuck } from "./IDuck";
import { ITurkey } from "./ITurkey";
import { MallardDuck } from "./MallardDuck";
import { TurkeyAdapter } from "./TurkeyAdapter";
import { WildTurkey } from "./WildTurkey";

export class DuckTestDrive {
    public static main(): void {
        let duck: IDuck = new MallardDuck();
        let turkey: ITurkey = new WildTurkey();
        let turkeyAdapter: IDuck = new TurkeyAdapter(turkey);

        console.log("The Turkey says...");
        turkey.gobble();
        turkey.fly();

        console.log("\nThe Duck says...");
        DuckTestDrive.testDuck(duck);

        console.log("\nThe TurkeyAdapter says...");
        DuckTestDrive.testDuck(turkeyAdapter);
    }

    static testDuck(duck: IDuck) {
        duck.quack();
        duck.fly();
    }
}

DuckTestDrive.main();