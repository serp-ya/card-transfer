import * as React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import cn from 'classnames';
import { InputLabel } from '@material-ui/core';
import styles from './with-base-field-adapter.module.scss';

export type TAdapterComponentProps = {
    className?: string;
    error?: boolean;
    input: WrappedFieldInputProps,
    name?: string;
    placeholder?: string;
    required?: boolean;
};

type TWithBaseFieldAdapterProps = TAdapterComponentProps & {
    label?: string;
    meta: WrappedFieldMetaProps,
};

export const withBaseFieldAdapter = (AdapterComponent: React.ComponentType<TAdapterComponentProps>) => (
    React.memo<TWithBaseFieldAdapterProps>(({
        input,
        label,
        meta: { error },
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
                className={cn(styles['component'], { [styles['error']]: error, [styles['not-empty']]: input?.value })}
                error={Boolean(error)}
                input={input}
                name={name}
                placeholder={placeholder}
                required={required}
            />
        </div>
    ))
);