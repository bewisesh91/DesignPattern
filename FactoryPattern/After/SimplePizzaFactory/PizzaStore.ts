import { Pizza } from "./Pizza";
import { SimplePizzaFactory } from "./SImplePizzaFactory";

export class PizzaStore {
    factory: SimplePizzaFactory;

    constructor(factory: SimplePizzaFactory) {
        this.factory = factory;
    }

    public orderPizza(type: string): Pizza {
        let pizza: Pizza = this.factory.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        
        return pizza;
    }
}