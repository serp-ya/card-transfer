import * as React from 'react';
import { useSelector } from 'react-redux';
import { getCreditInfoFormErrors } from './card-info-page-errors-selectors';
import styles from './card-info-page-errors.module.scss';

export const CardInfoPageErrors = React.memo<{}>(() => {
    const errors = useSelector(getCreditInfoFormErrors);

    if (errors.length === 0) {
        return null;
    }
    return (
        <div className={styles['errors']}>
            {errors.map(error => (
                <div key={error}>{error}</div>
            ))}
        </div>
    );
});