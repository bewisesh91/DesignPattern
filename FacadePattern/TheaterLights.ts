export class TheaterLights {
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

    public dim(level: Number): void {
        console.log(this.description + " dimming to " + level + "%");
    }

    public toString(): String {
        return this.description;
    }
}