class BadCircle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }
}

class BadSquare {
    private side: number;

    constructor(side: number) {
        this.side = side;
    }

    getSide(): number {
        return this.side;
    }

    setSide(side: number): void {
        this.side = side;
    }
}

class BadCalculationService {
    calculateSumArea(square: BadSquare, circle: BadCircle): number {
        return this.calculateAreaCircle(circle) + this.calculateAreaSquare(square);
    }

    calculateAreaCircle(circle: BadCircle): number {
        return  Math.PI * circle.getRadius() * circle.getRadius(); 
    }

    calculateAreaSquare(square: BadSquare): number {
        return square.getSide() * square.getSide();
    } 
}

function BadOpenClosedMain() : void {
    const calculationService = new BadCalculationService();
    const circle = new BadCircle(4.3);
    const square = new BadSquare(10);
    console.log(calculationService.calculateSumArea(square, circle))
}

BadOpenClosedMain();
