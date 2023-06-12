import { NYStyleCheesePizza } from "./NYStyleCheesePizza";
import { Pizza } from "./Pizza";
import { PizzaStore } from "./PizzaStore";

export class NYStylePizzaStore extends PizzaStore{
    public createPizza(type: string): Pizza {
        let pizza: Pizza = null;

        if (type === "cheese") {
            pizza = new NYStyleCheesePizza();
        // } else if (type === "pepperoni") {
        //     pizza = new NYStylePepperoniPizza();
        // } else if (type === "clam") {
        //     pizza = new NYStyleClamPizza();
        // } else if (type === "veggie") {
        //     pizza = new NYStyleVeggiePizza();
        }

        return pizza;
    }


}