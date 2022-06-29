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