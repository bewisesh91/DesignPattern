import { ChicagoStylePizzaStore } from "./ChicagoStylePizzaStore";
import { NYStylePizzaStore } from "./NYStylePizzaStore";

class PizzaTestDrive {
    public static main(): void {
        let nyStore: NYStylePizzaStore = new NYStylePizzaStore();
        let chicagoStore: ChicagoStylePizzaStore = new ChicagoStylePizzaStore();

        let pizza = nyStore.orderPizza("cheese");
        console.log("ordered a " + pizza.getName() + "\n");

        pizza = chicagoStore.orderPizza("cheese");
        console.log("ordered a " + pizza.getName() + "\n"); 
    }
}

PizzaTestDrive.main();