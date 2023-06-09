import { Size } from "./Size";

export class Grande extends Size {
    constructor() {
        super();
        this.sizeInfo = "Grande";
    }

    public getSizeInfo(): string {
        return this.sizeInfo;
    }

    cost() {
        return .20;
    }
}