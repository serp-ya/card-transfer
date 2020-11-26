import * as React from 'react';
import cn from 'classnames';
import styles from './application-page.module.scss';

type TApplicationPageProps = {
    className?: string; 
    children: React.ReactNode;
};

export const ApplicationPage = React.memo<TApplicationPageProps>(({ className = '', children }) => (
    <div className={cn(styles['page-container'], className)}>{children}</div>
));