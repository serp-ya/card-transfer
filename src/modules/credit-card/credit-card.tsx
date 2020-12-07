import * as React from 'react';
import { FormSection } from 'redux-form';
import cn from 'classnames';
import { CardNumberInput } from '../../components/card-number-input';
import { CardExpiresInput } from '../../components/card-expires-input';
import { CardCvcInput } from '../../components/card-cvc-input';
import MasterCardLogo from '../../assets/mc_downloads_symbol_350x200 2.png';
import MirCardLogo from '../../assets/mir-logo-h229px 2.png';
import VisaCardLogo from '../../assets/visa_PNG4 2.png';
import { ECreditCardForm } from './credit-card-enum';
import styles from './credit-card.module.scss';

type TCreditCardProps = {
    className?: string;
    sectionName: string;
    showOnlyNumber?: boolean;
};

export const CreditCard = React.memo<TCreditCardProps>(({
    className,
    sectionName,
    showOnlyNumber,
}) => {
    return (
        <div className={cn(styles['card'], className)}>
            <FormSection name={sectionName}>
                <div className={styles['assets']}>
                    <img alt="Visa Card Logo" className={styles['card-logo']} src={VisaCardLogo} />
                    <img alt="Master Card Logo" className={styles['card-logo']} src={MasterCardLogo} />
                    <img alt="Mir Card Logo" className={cn(styles['card-logo'], styles['card-logo-mir'])} src={MirCardLogo} />
                </div>
                <div className={styles['card-number']}>
                    <CardNumberInput name={ECreditCardForm.CardNumber} required />
                </div>
                {!showOnlyNumber && (
                    <div className={styles['card-bottom']}>
                        <CardExpiresInput name={ECreditCardForm.CardExpires} required />
                        <CardCvcInput name={ECreditCardForm.CardCvc} required />
                    </div>
                )}
            </FormSection>
        </div>
    );
});