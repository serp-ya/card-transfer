import * as React from 'react';
import { Field } from 'redux-form';
import { CARD_CVC_DEFAULT_LABEL } from './card-cvc-input-constants';
import { cardCvcFormatter } from './card-cvc-input-utils';
import { CardCvcInput } from './card-cvc-input';

type TCardCvcInputReduxProps = {
    label?: string;
    name: string;
    required?: boolean;
};

export const CardCvcInputRedux = React.memo<TCardCvcInputReduxProps>(({
    label,
    name,
    required,
}) => (
    <Field
        component={CardCvcInput}
        format={cardCvcFormatter}
        label={label || CARD_CVC_DEFAULT_LABEL}
        name={name}
        required={required}
    />
));