import * as React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { CreditCard } from '../../modules/credit-card';
import { ApplicationPage } from '../../components/application-page';
import { CardMoneyInput } from '../../components/card-money-input';
import { RUR_SIGN } from '../../constants';
import { getComputedCommission, getCommissionPercent } from './card-info-page-selectors';
import { ECardInfoFields } from './card-info-page-enum';
import styles from './card-info-page.module.scss';

export const CardInfoPage = React.memo(() => {
    const commissionPercent = useSelector(getCommissionPercent);
    const commission = useSelector(getComputedCommission);

    return (
        <ApplicationPage className={styles['container']}>
            <h1 className={styles['header']}>Переводы с карты на карту</h1>
            <h2 className={styles['sub-header']}>Доступные переводы на карту с коммисией всего {commissionPercent}%</h2>
            <div className={styles['cards']}>
                <div className={styles['card']}>
                    <h3 className={styles['card-title']}>Ваша карта</h3>
                    <CreditCard className={styles['arrow-right']} sectionName={ECardInfoFields.From} />
                </div>
                <div className={styles['card']}>
                    <h3 className={styles['card-title']}>Карта получателя</h3>
                    <CreditCard sectionName={ECardInfoFields.To} showOnlyNumber />
                </div>
            </div>
            <div className={styles['sum']}>
                <h3 className={styles['sum-title']}>Сумма перевода</h3>
                <CardMoneyInput name={ECardInfoFields.Money} required />
            </div>
            <div className={styles['commission']}>
                Комиссия - {commission} {RUR_SIGN}
            </div>

            <div className={styles['button-section']}>
                <Button
                    className={styles['send-button']}
                    variant="contained"
                >
                    Отправить
                </Button>
            </div>
        </ApplicationPage>
    );
});