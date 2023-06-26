import { ICommand } from "./ICommand";
import { Stereo } from "./Stereo";

export class StereoOnWithCDCommand implements ICommand{
    stereo: Stereo;
    
    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }
    undo(): void {
        this.stereo.off();
    }
    
    public execute(): void {
        this.stereo.on();
        this.stereo.setCD();
        this.stereo.setVolume(11);
    }
 }