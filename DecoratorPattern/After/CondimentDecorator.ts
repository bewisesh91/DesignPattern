import { Beverage } from "./Beverage";

export abstract class CondimentDecorator extends Beverage {
    public beverage: Beverage;
    public abstract getDescription(): string;
}