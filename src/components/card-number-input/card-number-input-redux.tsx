import * as React from 'react';
import { Field } from 'redux-form';
import { cardNumberFormatter } from './card-number-input-utils';
import { CARD_NUMBER_DEFAULT_LABEL } from './card-number-input-constants';
import { CardNumberInput } from './card-number-input';
import { cardNumberFieldValidators } from './card-number-input-validators';

type TCardNumberInputReduxProps = {
    label?: string;
    name: string;
    required?: boolean;
};

export const CardNumberInputRedux = React.memo<TCardNumberInputReduxProps>(({
    label,
    name,
    required,
}) => (
    <Field
        component={CardNumberInput}
        format={cardNumberFormatter}
        label={label || CARD_NUMBER_DEFAULT_LABEL}
        name={name}
        required={required}
        validate={cardNumberFieldValidators}
    />
));