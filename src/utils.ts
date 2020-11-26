import {
    DEFAULT_MONEY_DECIMAL_DELIMETER,
    DEFAULT_SIGHNS_COUNT_AFTER_DELIMETER,
} from './constants';

export const formatByMoneyPattern = (value: number, rerurnDecimals?: boolean): string => {
    const [wholePart, fractionalPart] = value
        .toFixed(DEFAULT_SIGHNS_COUNT_AFTER_DELIMETER)
        .split(DEFAULT_MONEY_DECIMAL_DELIMETER);
    const formatedWholePart = Array
        .from(wholePart.toString())
        .reverse()
        .reduce((acc, num, i) => {
            if (i % 3 === 0) {
                acc.push(' ', num);
            } else {
                acc.push(num)
            }

            return acc;
        }, [] as string[])
        .reverse()
        .join('')

    return rerurnDecimals
        ? [formatedWholePart, fractionalPart].join(DEFAULT_MONEY_DECIMAL_DELIMETER)
        : formatedWholePart
};
