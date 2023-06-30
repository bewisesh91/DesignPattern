import { Amplifier } from "./Amplifier";

export class CDPlayer {
    description: String;
    currentTrack: number;
    amplifier: Amplifier;
    title: String;

    constructor(description: String, amplifier: Amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }

    public on(): void {
        console.log(this.description + " on");
    }

    public off(): void {
        console.log(this.description + " off");
    }

    public eject(): void {
        this.title = null;
        console.log(this.description + " eject");
    }

    public play(title: String): void {
        this.title = title;
        this.currentTrack = 0;
        console.log(this.description + " playing \"" + title + "\"");
    }

    public playTrack(track: number): void {
        if (this.title == null) {
            console.log(this.description + " can't play track " + track + ", no cd inserted");
        } else {
            this.currentTrack = track;
            console.log(this.description + " playing track " + this.currentTrack);
        }
    }

    public stop(): void {
        this.currentTrack = 0;
        console.log(this.description + " stopped");
    }

    public pause(): void {
        console.log(this.description + " paused \"" + this.title + "\"");  
    }

    public toString(): String {
        return this.description;
    }
}