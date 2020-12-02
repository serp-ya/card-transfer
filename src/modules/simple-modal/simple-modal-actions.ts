import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
const namespaceAction = (actionType: string): string => `@simple-modal/${actionType}`;

export const OPEN_SIMPLE_MODAL = namespaceAction('open-simple-modal')
export const openSimpleModalAction = (title: string, message: string, withError?: boolean) => ({
    payload: {
        message,
        title,
        withError,
    },
    type: OPEN_SIMPLE_MODAL
});

export const CLOSE_SIMPLE_MODAL = namespaceAction('close-simple-modal')
const closeSimpleModalAction = () => ({
    type: CLOSE_SIMPLE_MODAL
});

export const useCloseSimpleModal = () => {
    const dispatch = useDispatch();

    return useCallback(
        () => dispatch(closeSimpleModalAction()),
        [dispatch]
    );
}