import { Amplifier } from "./Amplifier";
import { HomeTheaterFacade } from "./HomeTheaterFacade";
import { Projector } from "./Projector";
import { StreamingPlayer } from "./StreamingPlayer";
import { TheaterLights } from "./TheaterLights";
import { Tuner } from "./Tuner";
import { Screen } from "./Screen";
import { PopcornPopper } from "./PopcornPopper";

export class HomeTheaterTestDrive {
    public static main(): void {
        let amp: Amplifier = new Amplifier("Top-O-Line Amplifier");
        let tuner: Tuner = new Tuner("Top-O-Line AM/FM Tuner", amp);
        let player: StreamingPlayer = new StreamingPlayer("Top-O-Line Streaming Player", amp);
        let projector: Projector = new Projector("Top-O-Line Projector", player);
        let lights: TheaterLights = new TheaterLights("Theater Ceiling Lights");
        let screen: Screen = new Screen("Theater Screen");
        let popper: PopcornPopper = new PopcornPopper("Popcorn Popper");
        
        let homeTheater: HomeTheaterFacade = new HomeTheaterFacade(amp, tuner, player, projector, lights, screen, popper);

        homeTheater.watchMovie("Raiders of the Lost Ark");
        homeTheater.endMovie();
    }
}

HomeTheaterTestDrive.main();