import { createIsRequiredFieldValidator } from '../../utils';

const cardNumberIsRequiredFieldValidator = createIsRequiredFieldValidator('Номер карты - обязательное поле');

export const cardNumberFieldValidators = [
    cardNumberIsRequiredFieldValidator,
];