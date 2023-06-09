import { Beverage } from "./Beverage";
import { Size } from "./Size";

export class Espresso extends Beverage {
    constructor(size: Size) {
        super(size);
        this.description = "Espresso";
    }

    public cost(): number {
        return 1.99 + this.size.cost();
    }
}