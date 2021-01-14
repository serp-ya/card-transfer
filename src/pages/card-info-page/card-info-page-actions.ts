import axios from 'axios';
import { reset, SubmissionError } from 'redux-form';
import {
    DEFAULT_ERROR_MESSAGE,
    DEFAULT_ERROR_TITLE,
    DEFAULT_OK_MESSAGE,
    DEFAULT_OK_TITLE,
    openSimpleModalAction,
} from '../../modules/simple-modal';
import type {
    TConfirmOperationPostDataResponse,
    TTransferPostDataResponse,
} from '../../services';
import {
    CONFIRM_OPERATION_URL,
    TRANSFER_URL
} from '../../services';
import { CARD_INFO_PAGE_FORM } from './card-info-page-constants';
import {
    prepareFormValuesToSendTransfer,
    prepareOperationIdToSendConfirmation,
    validateCardInfoForm,
} from './card-info-page-utils';
import type { TCreditCardInfoPageFormValues } from './card-info-page-types';

export const onSubmitHandler = async (values: TCreditCardInfoPageFormValues, dispatch) => {
    const errors = validateCardInfoForm(values);

    if (Object.keys(errors).length > 0) {
        throw new SubmissionError(errors)
    }

    try {
        const dataForTransfer = prepareFormValuesToSendTransfer(values);
        const transferResponse = await axios.post<TTransferPostDataResponse>(TRANSFER_URL, dataForTransfer);
        const dataForConfirmation = prepareOperationIdToSendConfirmation(transferResponse?.data?.operationId);
        await axios.post<TConfirmOperationPostDataResponse>(CONFIRM_OPERATION_URL, dataForConfirmation);

        dispatch(
            openSimpleModalAction(DEFAULT_OK_TITLE, DEFAULT_OK_MESSAGE)
        );
        dispatch(reset(CARD_INFO_PAGE_FORM))
    } catch (error) {
        dispatch(
            openSimpleModalAction(DEFAULT_ERROR_TITLE, error?.response?.data?.message || DEFAULT_ERROR_MESSAGE, true)
        );
    }
};