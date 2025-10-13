export function sum(a: number, b: number): number {
    return a + b;
}

export const addArray = (numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};
