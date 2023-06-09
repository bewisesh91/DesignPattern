import { Beverage } from "./Beverage"
import { Espresso } from "./Espresso";
import { Mocha } from "./Mocha";
import { Soy } from "./Soy";
import { Whip } from "./Whip";
import { Tall } from "./Tall";
import { Grande } from "./Grande";

class StarbuzzCoffee {
    public static main(): void {
        let beverage: Beverage = new Espresso(new Tall());
        console.log(beverage.getDescription() + " - "  + beverage.getSize() + " Size : $" + beverage.cost());

        let beverage2: Beverage = new Espresso(new Grande());
        beverage2 = new Mocha(beverage2);
        beverage2 = new Soy(beverage2);
        beverage2 = new Whip(beverage2);
        console.log(beverage2.getDescription() + " - "  + beverage2.getSize() + " Size : $" + beverage2.cost());
    }
};

StarbuzzCoffee.main();