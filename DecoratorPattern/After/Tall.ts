import { Size } from "./Size";

export class Tall extends Size {
    constructor() {
        super();
        this.sizeInfo = "Tall";
    }
    
    public getSizeInfo(): string {
        return this.sizeInfo;
    }

    public cost(): number {
        return .10;
    }
}