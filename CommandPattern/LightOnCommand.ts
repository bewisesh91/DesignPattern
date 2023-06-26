import { ICommand } from "./ICommand";
import { Light } from "./Light";

export class LightOnCommand implements ICommand {
    light: Light;

    constructor(light: Light) {
        this.light = light;
    }
    undo(): void {
        this.light.off();
    }

    execute(): void {
        this.light.on();
    }

}