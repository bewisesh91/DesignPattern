import { StreamingPlayer } from "./StreamingPlayer";

export class Projector {
    description: String;
    player: StreamingPlayer;

    constructor(description: String, player: StreamingPlayer) {
        this.description = description;
        this.player = player;
    }

    public on(): void {
        console.log(this.description + " on");
    }

    public off(): void {
        console.log(this.description + " off");
    }

    public wideScreenMode(): void {
        console.log(this.description + " in widescreen mode (16x9 aspect ratio)");
    }

    public tvMode() {
        console.log(this.description + " in tv mode (4x3 aspect ratio)");
    }

    public toString(): String {
        return this.description;
    }
}