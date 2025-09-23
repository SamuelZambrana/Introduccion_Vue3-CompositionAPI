const person = {
    name: 'Tony',
    age: 45,
    adress: {
        country: 'USA',
        city: 'New York'
    },
    getFullName: (surname: string): string => {
        return `${person.name} ${surname}`
    }
}

// const printAge = (person: { age: number }): void => {
//     console.log(person.age)
// }

// printAge(person)

const { name, age, adress: { country } } = person

console.log(name)
console.log(age)
console.log(country)

const fullName = person.getFullName('Stark')
console.log(fullName)

const person2 = structuredClone(person)
person2.name = 'Peter'

console.log(person)
console.log(person2)    

export default {
      person
    , person2}; // To ensure this file is treated as a module