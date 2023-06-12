import { Pizza } from "./Pizza";

export class SimplePizzaFactory {
    public createPizza(type: string): Pizza {
        let pizza: Pizza = null;

        // if (type === "cheese") {
        //     pizza = new CheesePizza();
        // } else if (type === "pepperoni") {
        //     pizza = new PepperoniPizza();
        // } else if (type === "clam") {
        //     pizza = new ClamPizza();
        // }

        return pizza;
    }
}