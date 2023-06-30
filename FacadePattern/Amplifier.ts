import { StreamingPlayer } from "./StreamingPlayer";
import { Tuner } from "./Tuner";

export class Amplifier {
    description: String;
    tuner: Tuner;
    player: StreamingPlayer;

    constructor(description: String) {
        this.description = description;
    }

    public on(): void {
        console.log(this.description + " on");
    }

    public off(): void {
        console.log(this.description + " off");
    }

    public setStreamingPlayer(player: StreamingPlayer): void {
        console.log(this.description + " setting streaming player to " + player);
        this.player = player;
    }

    public setTuner(tuner: Tuner): void {
        console.log(this.description + " setting tuner to " + tuner);
        this.tuner = tuner;
    }

    public setSurroundSound(): void {
        console.log(this.description + " surround sound on (5 speakers, 1 subwoofer)");
    }

    public setVolume(level: number): void {
        console.log(this.description + " setting volume to " + level);
    }

    public setStereoSound() {
        console.log(this.description + " stereo mode on");
    }

    public toString(): String {
        return this.description;
    }
}