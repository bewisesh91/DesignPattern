import { CheesePizza } from "./CheesePizza";
import { PizzaIngredientFactory } from "./IPizzaIngredientFactory";
import { NYPizzaIngredientFactory } from "./NYPizzaIngredientFactory";
import { Pizza } from "./Pizza";
import { PizzaStore } from "./PizzaStore";

export class NYPizzaStore extends PizzaStore{
    public createPizza(type: string): Pizza {
        let pizza: Pizza = null;
        let ingredientFacotry: PizzaIngredientFactory = new NYPizzaIngredientFactory();

        if (type === "cheese") {
            pizza = new CheesePizza(ingredientFacotry);
            pizza.setName("New York Style Cheese Pizza");
        // } else if (type === "veggie") {
        //     pizza = new VeggiePizza(ingredientFacotry);
        //     pizza.setName("New York Style Veggie Pizza");
        // } else if (type === "clam") {
        //     pizza = new ClamPizza(ingredientFacotry);
        //     pizza.setName("New York Style Clam Pizza");
        // } else if (type === "pepperoni") {
        //     pizza = new PepperoniPizza(ingredientFacotry);
        //     pizza.setName("New York Style Pepperoni Pizza");
        }
        return pizza;
    }

}