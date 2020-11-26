import * as React from 'react';
import { WrappedFieldInputProps } from 'redux-form';
import cn from 'classnames';
import { InputLabel } from '@material-ui/core';
import styles from './with-base-field-adapter.module.scss';

type TAdapterComponentProps = {
    className?: string;
    error?: boolean;
    input: WrappedFieldInputProps,
    name?: string;
    placeholder?: string;
    required?: boolean;
};

export type TWithBaseFieldAdapterProps = TAdapterComponentProps & {
    label?: string;
};

export const withBaseFieldAdapter = (AdapterComponent: React.ComponentType<TAdapterComponentProps>) => (
    React.memo<TWithBaseFieldAdapterProps>(({
        error,
        input,
        label,
        name,
        placeholder,
        required,
    }) => (
        <div className={styles['field']}>
            {label && (
                <InputLabel className={cn(styles['label'], {
                    [styles['error']]: error,
                })}>
                    {label}
                </InputLabel>
            )}
            <AdapterComponent
                className={styles['component']}
                error={error}
                input={input}
                name={name}
                placeholder={placeholder}
                required={required}
            />
        </div>
    ))
);