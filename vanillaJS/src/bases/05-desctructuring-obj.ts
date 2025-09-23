interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
    adress?: Address;
}

interface Address {
    street: string;
    city: string;
    country: string;
}



const person: Hero = {
    name: 'Tony',
    age: 45,
    adress: {
        country: 'USA',
        city: 'New York',
        street: '5th Avenue'
    },
    powers: ['Money', 'Intelligence'],
    getName() {
        return this.name
    }   
}

const { name, age, adress } = person
//Destructuring in two different ways
const { country, street = 'No street' } = adress || {}

console.log({name, age, street})

const fullName = person.getName ? person.getName() : 'No name'
console.log({fullName})

const person2 = structuredClone(person)
person2.name = 'Peter'

console.log({person, person2})    

export default {
      person
    , person2
    , name
    , age
    , country
    , fullName
}; // To ensure this file is treated as a module