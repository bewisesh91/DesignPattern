export abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    toppings: string[] = new Array<string>();

    prepare() {
        console.log("Preparing " + this.name);
        console.log("Tossing dough...");
        console.log("Adding sauce...");
        console.log("Adding toppings: ");
        for (const topping of this.toppings) {
            console.log("   " + topping);
        }
    }

    bake() {
        console.log("Bake the pizza at 175 degrees for 25 minutes.")
    }

    cut() {
        console.log("Cut the pizza into diagonal slices.");
    }

    box() {
        console.log("Place the pizza in box.");
    }
    
    public getName(): string {
        return this.name;
    }
}