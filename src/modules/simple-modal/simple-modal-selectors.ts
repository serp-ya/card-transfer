import { createSelector } from 'reselect';
import { SIMPLE_MODAL_STORE_NAME } from './simple-modal-constants';

const getSimpleModalState = (state) => state[SIMPLE_MODAL_STORE_NAME];

export const getSimpleModalIsOpen = createSelector(
    getSimpleModalState,
    (simpleModalState): boolean => simpleModalState.isOpen,
);

export const getSimpleModalWithError = createSelector(
    getSimpleModalState,
    (simpleModalState): boolean => simpleModalState.withError,
);

export const getSimpleModalData = createSelector(
    getSimpleModalState,
    (simpleModalState) => ({
        title: simpleModalState.title,
        message: simpleModalState.message,
    })
);
