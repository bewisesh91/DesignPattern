import { Beverage } from "./Beverage";

class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = "Dark Roast Coffee";
    }
    public cost(): number {
        return .99;
    }
}