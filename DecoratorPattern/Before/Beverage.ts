export abstract class Beverage {
    public description: string;

    public getDescription(): string {
        return this.description;
    }

    // there will be a lot of subclasses and they will all need to implement this method
    public abstract cost(): number;
}