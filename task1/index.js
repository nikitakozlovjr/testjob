const mapping = {
    '0': 'компьютеров',
    '1': 'компьютер',
    '2': 'компьютера',
    '3': 'компьютера',
    '4': 'компьютера',
    '5': 'компьютеров',
    '6': 'компьютеров',
    '7': 'компьютеров',
    '8': 'компьютеров',
    '9': 'компьютеров'
};

const getWordCombination = (count) => {
    const lastNum = String(count)[String(count).length - 1];
    return `${count} ${mapping[lastNum]}`;
};

export default getWordCombination;