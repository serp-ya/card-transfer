import {
    CLOSE_SIMPLE_MODAL,
    OPEN_SIMPLE_MODAL,
} from './simple-modal-actions';

const INIT_STATE = {
    isOpen: false,
    message: '',
    title: '',
    withError: false,
};

export const simpleModalReducer = (state = INIT_STATE, { payload, type }) => {
    switch(type) {
        case CLOSE_SIMPLE_MODAL: {
            return INIT_STATE;
        }
        case OPEN_SIMPLE_MODAL: {
            return {
                ...payload,
                isOpen: true,
            };
        }
        default: {
            return state;
        }
    }
}