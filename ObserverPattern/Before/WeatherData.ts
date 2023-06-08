export class WeatherData {
    getTemperature(): number {
        return 0;
    }
    getHumidity(): number {
        return 0;
    }
    getPressure(): number {
        return 0;   
    }
    measurementsChanged(): void {
        let temp: number = this.getTemperature();
        let humidity: number = this.getHumidity();
        let pressure: number = this.getPressure();

        // logic to update the display, it could be hard to maintain.
        // currentConditionsDisplay.update(temp, humidity, pressure);
        // statisticsDisplay.update(temp, humidity, pressure);
        // forecastDisplay.update(temp, humidity, pressure);
    }
}