export abstract class Size {
    public sizeInfo: string;

    constructor() {
        this.sizeInfo = "Unknown Size";
    }

    public abstract getSizeInfo(): string 
    public abstract cost(): number;
}