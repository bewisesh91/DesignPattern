import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage.size);
        this.beverage = beverage;
    }
    
    public getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }

    public cost(): number {
        return this.beverage.cost() + .10;
    }
}