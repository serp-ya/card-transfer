import { createIsRequiredFieldValidator } from '../../utils';

const moneyIsRequiredFieldValidator = createIsRequiredFieldValidator('Сумма перевода - обязательное поле');

export const moneyFieldValidators = [
    moneyIsRequiredFieldValidator,
];