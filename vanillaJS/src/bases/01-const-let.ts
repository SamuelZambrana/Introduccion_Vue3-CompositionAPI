
const variableLet: string = 'I am a let variable';

const variableConst: string = 'I am a const variable';

console.log({variableLet, variableConst});

// variableLet = 'Trying to change let variable'; // This is allowed
// variableConst = 'Trying to change const variable'; // This will cause an error   

export default {
    variableLet,
    variableConst
}; // To ensure this file is treated as a module