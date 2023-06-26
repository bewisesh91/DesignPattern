import { ICommand } from "./ICommand";
import { Light } from "./Light";
import { LightOffCommand } from "./LightOffCommand";
import { LightOnCommand } from "./LightOnCommand";
import { MacroCommand } from "./MacroCommand";
import { RemoteControl } from "./RemoteControl";
import { Stereo } from "./Stereo";
import { StereoOnWithCDCommand } from "./StereoOnwithCDCommand";
import { StereoOffCommand } from "./StereoOnwithCDCommand copy";

export class RemoteLoader {
    public static main(): void {
        let remoteControl: RemoteControl = new RemoteControl();
        let livingRoomLight: Light = new Light("Living Room");
        let livingRoomStrereo: Stereo = new Stereo("Living Room");

        let livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight);
        let livingRoomLightOff: LightOffCommand = new LightOffCommand(livingRoomLight);
        let livingRoomStereoOn: StereoOnWithCDCommand = new StereoOnWithCDCommand(livingRoomStrereo);
        let livingRoomStereoOff: StereoOffCommand = new StereoOffCommand(livingRoomStrereo);
        
        remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
        remoteControl.setCommand(1, livingRoomStereoOn, livingRoomStereoOff);

        console.log(remoteControl.toString());

        remoteControl.onButtonWasPushed(0);
        remoteControl.offButtonWasPushed(0);
        remoteControl.undoButtonWasPushed();
        
        console.log(remoteControl.toString());
        remoteControl.onButtonWasPushed(1);
        remoteControl.offButtonWasPushed(1);

        let partyOn: ICommand[] = [livingRoomLightOn, livingRoomStereoOn];
        let partyOff: ICommand[] = [livingRoomLightOff, livingRoomStereoOff];

        let partyOnMacro: MacroCommand = new MacroCommand(partyOn);
        let partyOffMacro: MacroCommand = new MacroCommand(partyOff);

        remoteControl.setCommand(0, partyOnMacro, partyOffMacro);
        console.log(remoteControl.toString());
        console.log("Pushing Macro On");
        remoteControl.onButtonWasPushed(0);
        console.log("Pushing Macro Off");
        remoteControl.offButtonWasPushed(0);
    }
}

RemoteLoader.main();