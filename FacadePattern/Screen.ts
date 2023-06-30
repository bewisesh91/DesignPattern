export class Screen {
    description: String;

    constructor(description: String) {
        this.description = description;
    }

    public up(): void {
        console.log(this.description + " going up");
    }

    public down(): void {
        console.log(this.description + " going down");
    }

    public toString(): String {
        return this.description;
    }
}