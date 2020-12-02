import * as React from 'react';
import { useSelector } from 'react-redux';
import type { FormInstance } from 'redux-form';
import { Button } from '@material-ui/core';
import { ApplicationPage } from '../../components/application-page';
import { CardMoneyInput } from '../../components/card-money-input';
import { CreditCard } from '../../modules/credit-card';
import { SimpleModal } from '../../modules/simple-modal';
import { RUR_SIGN } from '../../constants';
import { CardInfoPageErrors } from './modules/card-info-page-errors';
import type { TCreditCardInfoPageFormValues } from './card-info-page-types';
import { getComputedCommission, getCommissionPercent } from './card-info-page-selectors';
import { ECardInfoFields } from './card-info-page-enum';
import styles from './card-info-page.module.scss';

export const CardInfoPage = React.memo((props: FormInstance<TCreditCardInfoPageFormValues, {}>) => {
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

            <CardInfoPageErrors />

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
                    onClick={props.submit}
                    variant="contained"
                >
                    Отправить
                </Button>
            </div>
            <SimpleModal />
        </ApplicationPage>
    );
});