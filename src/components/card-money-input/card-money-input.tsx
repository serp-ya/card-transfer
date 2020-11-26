import * as React from 'react';
import { TextField } from '@material-ui/core';
import { withBaseFieldAdapter } from '../with-base-field-adapter';
import type { TWithBaseFieldAdapterProps } from '../with-base-field-adapter';
import styles from './card-money-input.module.scss';

const CardMoneyInputComponent = React.memo<TWithBaseFieldAdapterProps>(({
    error,
    input,
    placeholder,
    required,
}) => (
    <TextField
        className={styles['money-input']}
        error={error}
        placeholder={placeholder}
        required={required}
        {...input}
    />
));


export const CardMoneyInput = withBaseFieldAdapter(CardMoneyInputComponent);