const isEven = (num) => {
    if (num < 2) {
        return false;
    }; 

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
            return false;
        };
    };
    
    return true;
}

const getListEven = (start, end) => {
    let result = [];
    while (start <= end) {
        if(isEven(start)) {
            result.push(start);
        };

        start += 1;
    };

    return result;
};

export default getListEven;