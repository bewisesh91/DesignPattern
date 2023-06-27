import { IDuck } from "./IDuck";

export class MallardDuck implements IDuck {
    public quack(): void {
        console.log("Quack");
    }

    public fly(): void {
        console.log("I'm flying");
    }
}