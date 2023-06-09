import { Size } from "./Size";

export abstract class Beverage {
    public description: string;
    public size: Size;

    constructor(size: Size) {
        this.size = size;
    }

    public getDescription(): string {
        return this.description;
    }

    public getSize(): string {
        return this.size.getSizeInfo();
    }

    public setSize(size: Size): void {
        this.size = size;
    }

    public abstract cost(): number;
}