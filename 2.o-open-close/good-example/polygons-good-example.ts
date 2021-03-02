interface Polygon {
    getArea(): number;
}

class Circle implements Polygon {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius; 
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }
}

class Square implements Polygon {
    private side: number;

    constructor(side: number) {
        this.side = side;
    }

    getArea(): number {
        return this.side * this.side;
    }

    getSide(): number {
        return this.side;
    }

    setSide(side: number): void {
        this.side = side;
    }
}

class CalculationService {
    calculateSumArea(polygons: Polygon[]): number {
        return polygons.reduce((ant, act) => ant + act.getArea(), 0);
    }   
}

class GoodOpenClosedMain {
    calculationService = new CalculationService();

    calculateArea(polygons: Polygon[]): void {
        const area = this.calculationService.calculateSumArea(polygons);
        console.log(area);
    }
}

const circle = new Circle( 4.3);
console.log(circle.getArea());

const square = new Square(10);
console.log(square.getArea());

const goodOpenClosedMain = new GoodOpenClosedMain();
goodOpenClosedMain.calculateArea([circle, square]);

class Triangle implements Polygon {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return (this.height*this.width)/2;
    }
}

const triangle = new Triangle(10,10);
console.log(triangle.getArea());

goodOpenClosedMain.calculateArea([circle, square, triangle]);

