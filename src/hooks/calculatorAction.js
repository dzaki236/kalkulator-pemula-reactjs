export const add = (numbers) => {
    return numbers.reduce((val1, val2) => val1 + val2, 0);
};

export const subtract = (numbers) => {
    return numbers.reduce((val1, val2) => val1 - val2);
};

export const multiply = (numbers) => {
    return numbers.reduce((val1, val2) => val1 * val2, 1);
};

export const divide = (numbers) => {
    return numbers.reduce((val1, val2) => val1 / val2);
};

export const modulus = (numbers) => {
    return numbers.reduce((val1, val2) => val1 % val2);
};
