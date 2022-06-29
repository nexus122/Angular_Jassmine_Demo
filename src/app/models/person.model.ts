export class Person {
    constructor(
        public name: string,
        public lastname: string,
        public age: number
    ) { }

    getFullName(): string {
        return `${this.name} ${this.lastname}`;
    }

    getAgeInYear(years: number): number {
        return years >= 0? this.age + years: this.age;   
    }
}