import * as React from 'react';
import { Input } from '@material-ui/core';
import { withBaseFieldAdapter } from '../with-base-field-adapter';
import type { TAdapterComponentProps } from '../with-base-field-adapter';
import { CARD_EXPIRES_INPUT_PLACEHOLDER } from './card-expires-input-constants';

const CardExpiresInputComponent = React.memo<TAdapterComponentProps>(({
    className,
    error,
    input,
    placeholder,
    required,
}) => (
    <Input
        className={className}
        error={error}
        placeholder={placeholder ? placeholder : CARD_EXPIRES_INPUT_PLACEHOLDER}
        required={required}
        {...input}
    />
));

export const CardExpiresInput = withBaseFieldAdapter(CardExpiresInputComponent);