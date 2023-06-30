import { Amplifier } from "./Amplifier";

export class Tuner {
    description: String;
    amplifier: Amplifier;
    frequency: Number;

    constructor(description: String, amplifier: Amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }

    public on(): void {
        console.log(this.description + " on");
    }

    public off(): void {
        console.log(this.description + " off");
    }

    public setFrequency(frequency: Number): void {
        console.log(this.description + " setting frequency to " + frequency);
        this.frequency = frequency;
    }

    public setAm(): void {
        console.log(this.description + " setting AM mode");
    }

    public setFm(): void {
        console.log(this.description + " setting FM mode");
    }

    public toString(): String {
        return this.description;
    }
}