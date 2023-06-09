import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";
import { Size } from "./Size";

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage.size);
        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    public cost(): number {
        return this.beverage.cost() + .20;
    }
}