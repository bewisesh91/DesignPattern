import IObserver from "./IObserver";
import { ISubject } from "./ISubject";

export class WeatherData implements ISubject {
    public getHumidity(): number {
        return this.humidity;
    }
    public getTemperature(): number {
        return this.temperature;
    }
    private observers: IObserver[];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        this.observers = new Array<IObserver>();
    }

    public registerObserver(o: any): void {
        this.observers.push(o);
    }

    public removeObserver(o: any): void {
        const i = this.observers.indexOf(o);
        if (i >= 0) {
            this.observers.splice(i, 1);
        }
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }

    public measurementsChanged(): void {
        this.notifyObservers();
    }

    public setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}