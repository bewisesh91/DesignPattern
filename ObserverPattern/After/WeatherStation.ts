import { CurrentConditionsDisplay } from "./CurrentCoditionsDisplay";
import { WeatherData } from "./WeatherData";

class WeatherStation {
    public static main(): void {
        let weatherData: WeatherData = new WeatherData();
        let currentConditionsDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

        weatherData.setMeasurements(80, 65, 30.4);
    }
}

WeatherStation.main();