
const numbers: number[] = [1, 2, 3, 4, 5];
const numbers2: Array<number> = [6, 7, 8, 9, 10];

const strings: string[] = ['one', 'two', 'three'];
const strings2: Array<string> = ['four', 'five', 'six'];

const booleans: boolean[] = [true, false, true];
const booleans2: Array<boolean> = [false, true, false];

const numbersAndStrings: (number | string)[] = [1, 'two', 3, 'four'];
const numbersAndStrings2: Array<number | string> = ['five', 6, 'seven', 8];

const people: { name: string; age: number }[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
];

const people2: Array<{ name: string; age: number }> = [
    { name: 'Charlie', age: 35 },
    { name: 'Diana', age: 28 }
];

const nestedArrays: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];

const nestedArrays2: Array<Array<number>> = [
    [7, 8, 9],
    [10, 11, 12]
];

console.log({
    numbers,
    numbers2,
    strings,
    strings2,
    booleans,
    booleans2,
    numbersAndStrings,
    numbersAndStrings2,
    people,
    people2,
    nestedArrays,
    nestedArrays2
});

export default {
      numbers
    , numbers2
    , strings
    , strings2
    , booleans
    , booleans2
    , numbersAndStrings
    , numbersAndStrings2
    , people
    , people2
    , nestedArrays
    , nestedArrays2
}; // To ensure this file is treated as a module