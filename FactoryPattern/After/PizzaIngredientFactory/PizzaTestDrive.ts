import { NYPizzaStore } from "./NYPizzaStore";

class PizzaTestDrive {
    public static main(): void {
        let nyStore: NYPizzaStore = new NYPizzaStore();

        let pizza = nyStore.orderPizza("cheese");
        console.log("ordered a " + pizza.getName() + "\n");
    }
}

PizzaTestDrive.main();