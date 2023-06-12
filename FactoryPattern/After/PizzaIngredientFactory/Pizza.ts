export abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    veggies: string[];
    cheese: string;
    pepperoni: string;
    clam: string;

    abstract prepare(): void;

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

    public setName(name: string): void {
        this.name = name;
    }  
}