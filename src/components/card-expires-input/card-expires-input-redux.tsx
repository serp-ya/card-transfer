import * as React from 'react';
import { Field } from 'redux-form';
import { cardExpiresFormatter } from './card-expires-input-utils';
import { CARD_EXPIRES_DEFAULT_LABEL } from './card-expires-input-constants';
import { CardExpiresInput } from './card-expires-input';

type TCardExpiresInputReduxProps = {
    label?: string;
    name: string;
    required?: boolean;
};

export const CardExpiresInputRedux = React.memo<TCardExpiresInputReduxProps>(({
    label,
    name,
    required,
}) => (
    <Field
        component={CardExpiresInput}
        format={cardExpiresFormatter}
        label={label || CARD_EXPIRES_DEFAULT_LABEL}
        name={name}
        required={required}
    />
));