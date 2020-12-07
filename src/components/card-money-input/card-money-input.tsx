import * as React from 'react';
import cn from 'classnames';
import { InputAdornment, TextField } from '@material-ui/core';
import { RUR_SIGN } from '../../constants';
import { withBaseFieldAdapter } from '../with-base-field-adapter';
import type { TAdapterComponentProps } from '../with-base-field-adapter';
import styles from './card-money-input.module.scss';

const CardMoneyInputProps = {
    endAdornment: <InputAdornment className={styles['currency-sign']} position="start">{RUR_SIGN}</InputAdornment>,
};

const CardMoneyInputComponent = React.memo<TAdapterComponentProps>(({
    className,
    error,
    input,
    placeholder,
    required,
}) => (
    <TextField
        className={cn(styles['money-input'], className, { [styles['not-empty']]: Number(input?.value) !== 0 })}
        error={error}
        InputProps={CardMoneyInputProps}
        placeholder={placeholder}
        required={required}
        {...input}
    />
));


export const CardMoneyInput = withBaseFieldAdapter(CardMoneyInputComponent);