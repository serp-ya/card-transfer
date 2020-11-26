import { RUR_SIGN } from '../../constants';
import { formatByMoneyPattern } from '../../utils';

export const moneyFormatter = (value: string = ''): string => {
    const cleanValue = Number(value.replace(/\D/g, ''));
    const formattedValue = formatByMoneyPattern(cleanValue);

    return `${RUR_SIGN} ${formattedValue.trim()}`;
};