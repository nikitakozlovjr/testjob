import getWordCombination from '../task1/index.js';
import getCommonDivisor from '../task2/index.js';
import getListEven from '../task3/index.js';
import GenerateTableMultiplication from '../task4/index.js';

test('task1', () => {
    expect(getWordCombination(25)).toBe('25 компьютеров');
    expect(getWordCombination(41)).toBe('41 компьютер');
    expect(getWordCombination(1048)).toBe('1048 компьютеров');
    expect(getWordCombination(21)).toBe('21 компьютер');
    expect(getWordCombination(54)).toBe('54 компьютера');
})

test('task2', () => {
    expect(getCommonDivisor([42, 12, 18])).toEqual([2, 3, 6]);
    expect(getCommonDivisor([5, 10, 15])).toEqual([5]);
    expect(getCommonDivisor([8, 18, 64])).toEqual([2]);
    expect(getCommonDivisor([9, 18, 81])).toEqual([3, 9]);
})

test('task3', () => {
    expect(getListEven(11, 20)).toEqual([11, 13 , 17, 19]);
    expect(getListEven(7, 9)).toEqual([7]);
    expect(getListEven(21, 21)).toEqual([]);
})

test('task4', () => {
    expect(new GenerateTableMultiplication(5).render()).toBe('   1  2  3  4  5 \n1  1  2  3  4  5 \n2  2  4  6  8  10 \n3  3  6  9  12  15 \n4  4  8  12  16  20 \n5  5  10  15  20  25 \n');
    expect(new GenerateTableMultiplication(3).render()).toBe('   1  2  3 \n1  1  2  3 \n2  2  4  6 \n3  3  6  9 \n');
})