import { Pizza } from "./Pizza";

export class ChicagoStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "Chigago Style Deep Dish Cheese Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";
        this.toppings.push("Shredded Mozzarella Cheese");
    }
    cut(): void {
        console.log("Cutting the pizza into square slices");
    }
}