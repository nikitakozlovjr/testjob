class GenerateTableMultiplication {

    static generateHeader = (num) => {
        let str = '  ';
        for(let i = 1; i <= num; i += 1) {
            str += ' ' + i + ' ';
        };

        str += '\n';

        return str;
    };

    constructor(num) {
        this.num = num;
    };

    render() {
        const headerTable = GenerateTableMultiplication.generateHeader(this.num);

        let tableBody = '';

        for(let i = 1; i <= this.num; i += 1) {
            let str = `${i} `;

            for(let k = 1; k <= this.num; k += 1) {
                str += ' ' + (i * k) + ' ';
            };

            str += '\n';
            tableBody += str;
        };

        const tableMultiplication = headerTable + tableBody;
        return tableMultiplication;
    }
};

console.log(new GenerateTableMultiplication(5).render());

export default GenerateTableMultiplication;