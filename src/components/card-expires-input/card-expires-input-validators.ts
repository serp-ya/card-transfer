import { createIsRequiredFieldValidator } from '../../utils';

const expiresIsRequiredFieldValidator = createIsRequiredFieldValidator('Срок действия карты - обязательное поле');

export const expiresFieldValidators = [
    expiresIsRequiredFieldValidator,
];