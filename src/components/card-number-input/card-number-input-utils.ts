export const cardNumberFormatter = (value = '') => (
    Array.from(value.replace(/\D/g, '')).reduce((acc, el, i) => {
        if (i >= 4 * 4) {
            return acc;
        }
        if ((i % 4) === 0) {
            return `${acc} ${el}`;
        }
    
        return `${acc}${el}`;
    }, '')
);