import { ICommand } from "./ICommand";
import { NoCommand } from "./NoCommand";

export class RemoteControl {
    onCommands: Array<ICommand>;
    offCommands: Array<ICommand>;
    unDoCommand: ICommand;

    constructor() {
        this.onCommands = new Array<ICommand>(7);
        this.offCommands = new Array<ICommand>(7);
        
        let noCommnad:ICommand = new NoCommand();
        
        for (let i:number = 0; i < 7; i++) {
            this.onCommands[i] = noCommnad;
            this.offCommands[i] = noCommnad;
        }
        this.unDoCommand = noCommnad;
    }

    public setCommand(slot: number, onCommand: ICommand, offCommand: ICommand): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    public onButtonWasPushed(slot: number): void {
        this.onCommands[slot].execute();
        this.unDoCommand = this.onCommands[slot];
    }

    public offButtonWasPushed(slot: number): void {
        this.offCommands[slot].execute()
        this.unDoCommand = this.offCommands[slot];
    }

    public undoButtonWasPushed(): void {
        this.unDoCommand.undo();
    }

    public toString(): string {
        let stringBuff: string = "\n------ Remote Control -------\n";
        for (let i:number = 0; i < this.onCommands.length; i++) {
            stringBuff += "[slot " + i + "] " + this.onCommands[i].constructor.name + "    " + this.offCommands[i].constructor.name + "\n";
        }
        return stringBuff;
    }
}