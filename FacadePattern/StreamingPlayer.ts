import { Amplifier } from "./Amplifier";

export class StreamingPlayer {
    description: String;
    currentChapter: number;
    amplifier: Amplifier;
    movie: String;

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

    public play(movie: String): void {
        this.movie = movie;
        this.currentChapter = 0;
        console.log(this.description + " playing \"" + movie + "\"");
    }

    public playChapter(chapter: number): void {
        if (this.movie == null) {
            console.log(this.description + " can't play chapter " + chapter + ", no movie selected");
        } else {
            this.currentChapter = chapter;
            console.log(this.description + " playing chapter " + this.currentChapter + " of \"" + this.movie + "\"");
        }
    }

    public stop(): void {
        this.currentChapter = 0;
        console.log(this.description + " stopped \"" + this.movie + "\"");
    }

    public pause(): void {
        console.log(this.description + " paused \"" + this.movie + "\"");  
    }

    public setTwoChannelAudio(): void {
        console.log(this.description + " set two channel audio");
    }

    public setSurroundAudio(): void {
        console.log(this.description + " set surround audio");
    }

    public toString(): String {
        return this.description;    
    }
}