const isCommonDivisor = (num, list) => {
    return list.every((n) => n % num === 0);
};

const getCommonDivisor = (list) => {
    const min = list.slice(1,).reduce((acc, num) => {
        if(acc > num) {
            acc = num;
        };
        return acc;
    }, list[0]);

    let result = [];

    for(let i = min; i > 1; i -= 1) {
        if(isCommonDivisor(i, list)) {
            result.push(i);
        }
    }

    return result.sort();
};

export default getCommonDivisor;