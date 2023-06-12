export class Pizza {


    public orderPizza(type: string): Pizza {
        let pizza: Pizza = new Pizza();
        
        // If pizza types would be different, we would have to create a new class for each type
        // if (type === "cheese") {
        //     pizza = new CheesePizza();
        // } else if (type === "pepperoni") {
        //     pizza = new PepperoniPizza();
        // } else if (type === "clam") {
        //     pizza = new ClamPizza();
        // }

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        
        return pizza;
    }

    public prepare() {
        throw new Error("Method not implemented.");
    }

    public bake() {
        throw new Error("Method not implemented.");
    }

    public cut() {
        throw new Error("Method not implemented.");
    }

    public box() {
        throw new Error("Method not implemented.");
    }
}