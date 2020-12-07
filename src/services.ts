export const TRANSFER_URL = `${process.env.REACT_APP_API_URL}/transfer`;
export type TTransferPostData = {
    cardFromNumber: string;
    cardFromValidTill: string;
    cardFromCVV: string;
    cardToNumber: string;
    amount: {
        value: number;
        currency: string;
    };
};
export type TTransferPostDataResponse = {
    operationId: string,
};

export const CONFIRM_OPERATION_URL = `${process.env.REACT_APP_API_URL}/confirmOperation`;
export type TConfirmOperationPostData = {
    code: string;
    operationId: string;
};
export type TConfirmOperationPostDataResponse = {
    operationId: string,
};