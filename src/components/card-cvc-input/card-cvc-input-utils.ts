import {
    CARD_CVC_MAX_LENGTH,
} from './card-cvc-input-constants';

export const cardCvcFormatter = (value = '') => {
    const cleanValue = value?.replace(/\D/g, '');

    return Array.from(cleanValue).slice(0, CARD_CVC_MAX_LENGTH).join('');
};