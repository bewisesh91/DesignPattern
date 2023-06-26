import { ICommand } from "./ICommand";

export class NoCommand implements ICommand {
    undo(): void { }
    execute(): void { }
}