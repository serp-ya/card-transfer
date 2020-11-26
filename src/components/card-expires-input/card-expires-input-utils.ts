import {
    CARD_EXPIRES_DELIMETER,
    CARD_EXPIRES_MONTH_START,
    CARD_EXPIRES_MONTH_END,
    CARD_EXPIRES_YEARS_START,
    CARD_EXPIRES_YEARS_END,
} from './card-expires-input-constants';

export const cardExpiresFormatter = (value = '') => {
    const cleanValue = value?.replace(/\D/g, '');
    if (cleanValue.length <= CARD_EXPIRES_MONTH_END) {
        return cleanValue;
    }
    return [
        cleanValue.slice(CARD_EXPIRES_MONTH_START, CARD_EXPIRES_MONTH_END),
        cleanValue.slice(CARD_EXPIRES_YEARS_START, CARD_EXPIRES_YEARS_END)
    ].join(CARD_EXPIRES_DELIMETER);
};