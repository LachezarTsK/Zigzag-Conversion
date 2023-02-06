
/**
 * @param {string} input
 * @param {number} rowsInZigZag
 * @return {string}
 */
var convert = function (input, rowsInZigZag) {
    if (input.length < rowsInZigZag || rowsInZigZag === 1) {
        return input;
    }

    const result = [];
    let charsInOneZigZagIteration_FirstRowLastRowSecondRow = 2 * (rowsInZigZag - 1);
    let firstStep = charsInOneZigZagIteration_FirstRowLastRowSecondRow;
    let secondStep = 0;

    for (let row = 0; row < rowsInZigZag; ++row) {
        let index = row;

        while (index < input.length) {
            if (firstStep !== 0 && index < input.length) {
                result.push(input.charAt(index));
            }
            index += firstStep;
            if (secondStep !== 0 && index < input.length) {
                result.push(input.charAt(index));
            }
            index += secondStep;
        }
        firstStep -= 2;
        secondStep += 2;
    }

    return result.join('');
};
