import { ITurkey } from "./ITurkey";

export class WildTurkey implements ITurkey {
    gobble(): void {
        console.log("Gobble gobble");
    }
    fly(): void {
        console.log("I'm flying a short distance");
    }
}