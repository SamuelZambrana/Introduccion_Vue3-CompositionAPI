import { expect, test } from 'vitest';
import { sum, addArray } from '../../helpers/sum';
import { describe } from 'node:test';

describe('sum helper', () => {  

    test('sum', () => {
    expect(sum(1, 2)).toBe(3);
});
});

describe('Array helpers', () => {
    test('addArray', () => {
        expect(addArray([1, 2, 3, 4, 5])).toBe(15);
    });
    test('addArray empty', () => {
        expect(addArray([])).toBe(0);
    });
});

