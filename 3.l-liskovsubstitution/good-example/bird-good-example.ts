interface FlyingBird {
    fly(): void;
}

interface SwimmingBird {
    swim(): void;
}

class Bird {
    private name: string;

    constructor(name: string) { this.name = name; }

    eats(): string { return 'Seeds'; }

    tweet(): void { console.log('Tweet'); }
}

class Dodo extends Bird {
    constructor(name: string) { super(name); }

    eats(): string { return 'Nuts'; }

    tweet(): void { console.log('Brrrr'); }
}

class Duck extends Bird implements FlyingBird, SwimmingBird {
    constructor(name: string) { super(name); }

    eats(): string { return 'Fish'; }

    tweet(): void { console.log('Quack'); }

    fly(): void { console.log('Duck is flying'); }

    swim(): void { console.log('The duck is swimming now')};
}

const duck = new Duck('Donald');
duck.fly();

const dodo = new Dodo('Dodoro');
dodo.tweet();


class Sparrow extends Bird implements FlyingBird {
    constructor(name: string) { super(name); }

    fly(): void { console.log('The sparrow is flying now'); }
}

const sparrow = new Sparrow('Jack');
sparrow.fly();
