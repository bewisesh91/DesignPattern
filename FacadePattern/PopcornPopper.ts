export class PopcornPopper {
    description: String;

    constructor(description: String) {
        this.description = description;
    }

    public on(): void {
        console.log(this.description + " on");
    }

    public off(): void {
        console.log(this.description + " off");
    }

    public pop(): void {
        console.log(this.description + " popping popcorn!");
    }

    public toString() {
        return this.description;
    }
}