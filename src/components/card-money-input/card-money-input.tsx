import * as React from 'react';
import cn from 'classnames';
import { TextField } from '@material-ui/core';
import { withBaseFieldAdapter } from '../with-base-field-adapter';
import type { TAdapterComponentProps } from '../with-base-field-adapter';
import styles from './card-money-input.module.scss';

const CardMoneyInputComponent = React.memo<TAdapterComponentProps>(({
    className,
    error,
    input,
    placeholder,
    required,
}) => (
    <TextField
        className={cn(styles['money-input'], className)}
        error={error}
        placeholder={placeholder}
        required={required}
        {...input}
    />
));


export const CardMoneyInput = withBaseFieldAdapter(CardMoneyInputComponent);