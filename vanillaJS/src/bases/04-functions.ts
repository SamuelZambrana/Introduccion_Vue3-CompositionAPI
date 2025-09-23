
function greetPerson(name: string): string {
    return `Hello, ${name}!`;
}

const greetJohn = greetPerson('John');
console.log(greetJohn);

const addNumbers = (a: number, b: number): number => {
    return a + b;
};

const sum = addNumbers(5, 10);
console.log(sum);

const getUser = (id: number): { id: number; name: string } => {
    return { id, name: `User${id}` };
}

export default {
      greetPerson
    , greetJohn
    , addNumbers
    , sum
    , getUser
}; // To ensure this file is treated as a module        