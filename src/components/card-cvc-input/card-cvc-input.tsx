import * as React from 'react';
import { Input } from '@material-ui/core';
import { withBaseFieldAdapter } from '../with-base-field-adapter';
import type { TWithBaseFieldAdapterProps } from '../with-base-field-adapter';
import { CARD_CVC_INPUT_PLACEHOLDER } from './card-cvc-input-constants';

const CarCvcInputComponent = React.memo<TWithBaseFieldAdapterProps>(({
    error,
    input,
    placeholder,
    required,
}) => (
    <Input
        error={error}
        placeholder={placeholder ? placeholder : CARD_CVC_INPUT_PLACEHOLDER}
        required={required}
        {...input}
    />
));

export const CardCvcInput = withBaseFieldAdapter(CarCvcInputComponent);