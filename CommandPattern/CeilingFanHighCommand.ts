import { CeilingFan } from "./CeilingFan";
import { ICommand } from "./ICommand";

export class CeilingFanHighCommand implements ICommand {
    ceilingFan: CeilingFan;
    prevSpeed: number;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    public undo(): void {
        if (this.prevSpeed == CeilingFan.HIGH) {
            this.ceilingFan.high();
        } else if (this.prevSpeed == CeilingFan.MEDIUM) {
            this.ceilingFan.medium();
        } else if (this.prevSpeed == CeilingFan.LOW) {
            this.ceilingFan.low();
        } else if (this.prevSpeed == CeilingFan.OFF) {
            this.ceilingFan.off();
        }
    }

    public execute(): void {
        this.prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.high();
    }
}