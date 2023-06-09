import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage.size);
        this.beverage = beverage;
    }
    
    public getDescription(): string {
        return this.beverage.getDescription() + ", Soy";
    }

    public cost(): number {
        return this.beverage.cost() + .15;
    }
}