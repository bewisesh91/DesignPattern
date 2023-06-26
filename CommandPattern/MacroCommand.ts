import { ICommand } from "./ICommand";

export class MacroCommand implements ICommand {
    commands: ICommand[];

    constructor(commands: ICommand[]) {
        this.commands = commands;
    }
    
    public undo(): void {
        for (let i = 0; i < this.commands.length; i++) {
            this.commands[i].undo();
        }
    }

    public execute(): void {
        for (let i = 0; i < this.commands.length; i++) {
            this.commands[i].execute();
        }
    }
}