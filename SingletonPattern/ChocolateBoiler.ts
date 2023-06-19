class ChocolateBoiler {
    private empty: boolean;
    private boiled: boolean;
    private static uniqueInstance: ChocolateBoiler;

    private constructor() {
        this.empty = true;
        this.boiled = false;
    }

    public static getInstance(): ChocolateBoiler {
        if (ChocolateBoiler.uniqueInstance == null) {
            ChocolateBoiler.uniqueInstance = new ChocolateBoiler();
        }
        return ChocolateBoiler.uniqueInstance;
    }

    public fill(): void {
        if (this.isEmpty()) {
            this.empty = false;
            this.boiled = false;
            // fill the boiler with a milk/chocolate mixture
        }
    }

    public drain(): void {
        if (!this.isEmpty() && this.isBoiled()) {
            // drain the boiled milk and chocolate
            this.empty = true;
        }
    }

    public boil(): void {
        if (!this.isEmpty() && !this.isBoiled()) {
            // bring the contents to a boil
            this.boiled = true;
        }
    }

    public isEmpty(): boolean {
        return this.empty;
    }

    public isBoiled(): boolean {
        return this.boiled; 
    }
}
