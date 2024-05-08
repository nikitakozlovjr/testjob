const mapping = {
    0: 'компьютеров',
    1: 'компьютер',
    2: 'компьютера',
    3: 'компьютера',
    4: 'компьютера',
    5: 'компьютеров',
    6: 'компьютеров',
    7: 'компьютеров',
    8: 'компьютеров',
    9: 'компьютеров'
};

const getWordCombination = (count) => {
    const remainderDivision = count % 10;
    return `${count} ${mapping[remainderDivision]}`;
};

export default getWordCombination;