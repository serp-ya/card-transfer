import { ECreditCardForm } from '../../modules/credit-card';
import {
    CARD_EXPIRES_DELIMETER,
    CARD_EXPIRES_MONTH_LENGTH,
    CARD_EXPIRES_YEARS_LENGTH,
} from '../../components/card-expires-input';
import { CARD_CVC_MAX_LENGTH } from '../../components/card-cvc-input';
import { CARD_NUMBER_LENGTH, FIRST_MONTH_NUMBER, LAST_MONTH_NUMBER, RUR_CODE, RUR_SIGN } from '../../constants';
import type {
    TConfirmOperationPostData,
    TTransferPostData,
} from '../../services';
import type { TCreditCardInfoPageFormValues } from './card-info-page-types';
import { ECardInfoFields } from './card-info-page-enum';

type TBaseFieldValidator = (value: string | undefined, person?: string) => string | void;

const validateCardNumber: TBaseFieldValidator = (cardNumber, person) => {
    if (!cardNumber || !cardNumber.trim()) {
        return `Номер карты ${person} обязателен`;
    }
    if (cardNumber.replace(/\D/g, '').length !== CARD_NUMBER_LENGTH) {
        return `Номер карты ${person} должен быть ${CARD_NUMBER_LENGTH} символов`;
    }
};

const validateCardExpires: TBaseFieldValidator = (cardExpires, person) => {
    if (!cardExpires || !cardExpires.trim()) {
        return `Срок действия карты ${person} обязателен`;
    }

    const [month, year] = cardExpires.split(CARD_EXPIRES_DELIMETER);
    if (!month || month.length < CARD_EXPIRES_MONTH_LENGTH) {
        return `Месяц действия карты обязателен и должен состоять из ${CARD_EXPIRES_MONTH_LENGTH} цифр`;
    }
    if (!year || year.length < CARD_EXPIRES_YEARS_LENGTH) {
        return `Месяц действия карты обязателен и должен состоять из ${CARD_EXPIRES_YEARS_LENGTH} цифр`;
    }

    const dateNow = new Date();
    const currentMonth = dateNow.getMonth() + 1; // need month number, not month index
    const currentYearLastTwoNumbers = dateNow.getFullYear().toString().slice(2);

    if (Number(month) < FIRST_MONTH_NUMBER) {
        return `Текущий месяц не может быть меньше ${FIRST_MONTH_NUMBER}`;
    }
    if (Number(month) > LAST_MONTH_NUMBER) {
        return `Текущий месяц не может быть больше ${LAST_MONTH_NUMBER}`;
    }

    const monthIsExpires = Number(month) < Number(currentMonth);
    const yearIsExpires = Number(year) < Number(currentYearLastTwoNumbers)
    const yearIsEquals = Number(year) === Number(currentYearLastTwoNumbers)

    if (yearIsExpires || (monthIsExpires && yearIsEquals)) {
        return `Истекла дата действия карты ${person}`;
    }
};

const validateCardCvc: TBaseFieldValidator = (cardCvc, person) => {
    if (!cardCvc || !cardCvc.trim()) {
        return `CVC / CVC2 номер карты ${person} обязателен`;
    }
    if (cardCvc.replace(/\D/g, '').length !== CARD_CVC_MAX_LENGTH) {
        return `CVC / CVC2 код ${person} должен быть ${CARD_CVC_MAX_LENGTH} символов`;
    }
};

const validateMoney: TBaseFieldValidator = (money) => {
    if (!money || !money.trim()) {
        return `Сумма перевода обязательна`;
    }
    const cleanMoney = money.replace(new RegExp(`[\s${RUR_SIGN}]`, 'g'), '');
    const cleanMoneyCount = parseFloat(cleanMoney);
    if (!cleanMoneyCount || cleanMoneyCount === 0) {
        return `Необходимо указать сумму перевода`;
    }
};

export const validateCardInfoForm = (values: TCreditCardInfoPageFormValues) => {
    const errors = {};
    const fromErrors = {};
    const toErrors = {};

    const { from, to, money } = values;

    const senderName = 'отправителя';
    const cardNumberFromError = validateCardNumber(from?.[ECreditCardForm.CardNumber], senderName);
    if (cardNumberFromError) {
        Object.assign(fromErrors, { [ECreditCardForm.CardNumber]: cardNumberFromError });
    }

    const cardExpiresFromErrors = validateCardExpires(from?.[ECreditCardForm.CardExpires], senderName);
    if (cardExpiresFromErrors) {
        Object.assign(fromErrors, { [ECreditCardForm.CardExpires]: cardExpiresFromErrors });
    }

    const cvcCodeFromErrors = validateCardCvc(from?.[ECreditCardForm.CardCvc], senderName);
    if (cvcCodeFromErrors) {
        Object.assign(fromErrors, { [ECreditCardForm.CardCvc]: cvcCodeFromErrors });
    }

    const receiverName = 'получателя';
    const cardNumberToError = validateCardNumber(to?.[ECreditCardForm.CardNumber], receiverName);
    if (cardNumberToError) {
        Object.assign(toErrors, { [ECreditCardForm.CardNumber]: cardNumberToError });
    }

    if (Object.keys(fromErrors).length > 0) {
        Object.assign(errors, { [ECardInfoFields.From]: fromErrors });
    }

    if (Object.keys(toErrors).length > 0) {
        Object.assign(errors, { [ECardInfoFields.To]: toErrors });
    }

    const moneyErrors = validateMoney(money);
    if (moneyErrors) {
        Object.assign(errors, { [ECardInfoFields.Money]: moneyErrors });
    }

    return errors;
};

export const prepareFormValuesToSendTransfer = (values: TCreditCardInfoPageFormValues): TTransferPostData => ({
    cardFromNumber: values[ECardInfoFields.From][ECreditCardForm.CardNumber].replace(/\D/g, ''),
    cardToNumber: values[ECardInfoFields.To][ECreditCardForm.CardNumber].replace(/\D/g, ''),
    cardFromCVV: values[ECardInfoFields.From][ECreditCardForm.CardCvc] as string,
    cardFromValidTill: values[ECardInfoFields.From][ECreditCardForm.CardExpires] as string,
    amount: {
        currency: RUR_CODE,
        value: Number(values[ECardInfoFields.Money].replace(/\D/g, '')) * 100,
    },
});

export const prepareOperationIdToSendConfirmation = (operationId: string): TConfirmOperationPostData => ({
    code: '0000',
    operationId,
});