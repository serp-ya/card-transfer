import * as React from 'react';
import cn from 'classnames';
import { Input } from '@material-ui/core';
import { withBaseFieldAdapter } from '../with-base-field-adapter';
import type { TAdapterComponentProps } from '../with-base-field-adapter';
import { CARD_NUMBER_INPUT_PLACEHOLDER } from './card-number-input-constants';
import styles from './card-number-input.module.scss';

const CardNumberInputComponent = React.memo<TAdapterComponentProps>(({
    className,
    error,
    input,
    placeholder,
    required,
}) => (
    <Input
        className={cn(styles['full-width'], className)}
        error={error}
        placeholder={placeholder ? placeholder : CARD_NUMBER_INPUT_PLACEHOLDER}
        required={required}
        {...input}
    />
));

export const CardNumberInput = withBaseFieldAdapter(CardNumberInputComponent);