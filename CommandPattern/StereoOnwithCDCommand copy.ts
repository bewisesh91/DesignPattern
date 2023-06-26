import { ICommand } from "./ICommand";
import { Stereo } from "./Stereo";

export class StereoOffCommand implements ICommand{
    stereo: Stereo;
    
    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }
    undo(): void {
        this.stereo.on();
    }
    
    public execute(): void {
        this.stereo.off();
    }
 }