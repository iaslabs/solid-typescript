class BadBird {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    eats(): string { return 'Seeds'; }

    tweet(): void { console.log('Tweet'); }

    fly(): void { console.log('The bird is flying now'); } 
}

class BadDodo extends BadBird {

    constructor(name: string) {
        super(name); 
    }

    eats(): string { return 'Nuts'; }

    tweet(): void { console.log('Brrrr'); }

    fly(): void { console.log('Dodos cant fly'); }
}

class BadDuck extends BadBird {

    constructor(name: string) {
        super(name); 
    }

    eats(): string { return 'Fish'; }

    tweet(): void { console.log('Quack'); }

    fly(): void { console.log('Duck is flying'); }
}

const badDuck = new BadDuck('Donald');
badDuck.fly();

const badDodo = new BadDodo('Dodoro');
badDodo.fly();
