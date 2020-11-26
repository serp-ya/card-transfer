import * as React from 'react';
import { Input } from '@material-ui/core';
import { withBaseFieldAdapter } from '../with-base-field-adapter';
import type { TWithBaseFieldAdapterProps } from '../with-base-field-adapter';
import { CARD_NUMBER_INPUT_PLACEHOLDER } from './card-number-input-constants';
import styles from './card-number-input.module.scss';

const CardNumberInputComponent = React.memo<TWithBaseFieldAdapterProps>(({
    error,
    input,
    placeholder,
    required,
}) => (
    <Input
        className={styles['full-width']}
        error={error}
        placeholder={placeholder ? placeholder : CARD_NUMBER_INPUT_PLACEHOLDER}
        required={required}
        {...input}
    />
));

export const CardNumberInput = withBaseFieldAdapter(CardNumberInputComponent);