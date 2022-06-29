# JasmineTestDemo
¡Mi primer Test unitario en Jasmin!
Siguiendo este tutorial: https://www.youtube.com/watch?v=-y58-AgLyo4&ab_channel=nicobytes

## Clase
He creado una clase Persona con dos metodos y tres atributos:
````
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
````

## Testing
Para testear la clase he creado un test unitario que me compruebe 3 cosas:
````
// Primero importamos el modelo de personas para hacer los test.
import { Person } from './person.model';

// Definimos el escenario que queremos resolver.
describe('Test for PersonModel', () => {
    // Describimos la funcion que queremos probar.
    it('should return an string with name + lastname', () => {
        // Creamos el objeto person en la clase persona.
        const person = new Person('Nicolas', 'Molina', 24);
        // Llamamos a la funcion y ponemos lo que esperamos que nos devuelva.
        expect(person.getFullName()).toEqual('Nicolas Molina');
    })
})

describe('Test for person.getAgeInYear', () => {
    it('should return 34 years', () => {
        const person = new Person('Nicolas', 'Molina', 24);
        const age = person.getAgeInYear(10);
        expect(age).toEqual(34);
    });

    it('should return 45 years', () => {
        const person = new Person('Nicolas', 'Molina', 20);
        const age = person.getAgeInYear(20);
        expect(age).toEqual(40);
    });

    it('should return -25 years in negative number', () => {
        const person = new Person('Nicolas', 'Molina', 25);
        const age = person.getAgeInYear(-10);
        expect(age).toEqual(25);
    });
});
````
Para pasar los test tienen que cumplir los siguientes requisitos.
- Que el metodo ``getFullName`` me devuelva el nombre, un espacio y el apellido
- Que el metodo ``getAgeInYear`` me devuelva la edad + un numero de años que se le pasa como parametro
  - Si le paso una persona de 24 años y le sumo 10 espero que me devcuelva 34
  - Si le paso un numero negativo, quiero que no me haga la suma y me devuelva la edad que indica el atributo
  

## Version
El proyuecto fue creado con:
Angular: 13.3.3</br>
Node: 16.14.2
