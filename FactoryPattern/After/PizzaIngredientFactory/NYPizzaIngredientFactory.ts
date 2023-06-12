import { PizzaIngredientFactory } from "./IPizzaIngredientFactory";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough() {
        return "NY Dough";
    }
    createSauce() {
        return "NY Sauce";
    }
    createCheese() {
        return "NY Cheese";
    }
    createVeggies() {
        let veggies: string[] = ["NY Veggies1", "NY Veggies2", "NY Veggies3"];
        return veggies;
    }
    createPepperoni() {
        return "NY Pepperoni";
    }
    createClam() {
        return "NY Clam";
    }
}