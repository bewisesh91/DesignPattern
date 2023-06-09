import { Size } from "./Size";

export class Venti extends Size {
    constructor() {
        super();
        this.sizeInfo = "Venti";
    }

    public getSizeInfo(): string {
        return this.sizeInfo;
    }

    public cost(): number {
        return .30;
    }
}