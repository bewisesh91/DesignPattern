import { IDisplayElement } from "./IDisplayElement";
import IObserver from "./IObserver";
import { WeatherData } from "./WeatherData";

export class CurrentConditionsDisplay implements IObserver, IDisplayElement {
    private temperature: number;
    private humidity: number;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    public update(): void {
        this.temperature = this.weatherData.getTemperature();
        this.humidity = this.weatherData.getHumidity();
        this.display();
    }

    public display(): void {
        console.log("Current Conditions : temperature - " + this.temperature + "F, humidity - " + this.humidity + "%")
    }
}