import { createIsRequiredFieldValidator } from '../../utils';

const cvcIsRequiredFieldValidator = createIsRequiredFieldValidator('CVC / CVC2 - обязательное поле');

export const cvcFieldValidators = [
    cvcIsRequiredFieldValidator,
];