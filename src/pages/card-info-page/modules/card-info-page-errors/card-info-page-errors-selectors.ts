import { createSelector } from 'reselect';
import { getFormSyncErrors, getFormSubmitErrors } from 'redux-form';
import { CARD_INFO_PAGE_FORM } from '../../card-info-page-constants';

export const getCreditInfoFormErrors = createSelector(
    getFormSyncErrors(CARD_INFO_PAGE_FORM),
    getFormSubmitErrors(CARD_INFO_PAGE_FORM),
    (
        { from: fromSync, to: toSync, money: moneySync }: any,
        { from: fromSubmit, to: toSubmit, money: moneySubmit }: any,
    ): string[] => (
        [fromSync, toSync, moneySync, fromSubmit, toSubmit, moneySubmit].reduce((acc, el) => {
            if (!el) {
                return acc;
            } else if (typeof el === 'string') {
                acc.push(el);
            } else if (Object.keys(el).length > 0) {
                return [...acc, ...Object.values(el)];
            }

            return acc;
        }, []).filter(Boolean).reduce((acc, err) => {
            if (!acc.includes(err)) {
                acc.push(err);
            }
            return acc;
        }, [])
    ),
);