import { ICommand } from "./ICommand";
import { Light } from "./Light";

export class LightOffCommand implements ICommand {
    light: Light;

    constructor(light: Light) {
        this.light = light;
    }
    undo(): void {
        this.light.on();
    }

    execute(): void {
        this.light.off();
    }

}