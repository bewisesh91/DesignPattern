export abstract class Duck {
    // existing methods
    quack(): void { } // it could be different for each subclass
    swim(): void { }
    abstract display(): void;

    // new method : unnecessary behaviors may be inherited in a subcalss
    fly() { 
        console.log('I am flying');
    }
}

