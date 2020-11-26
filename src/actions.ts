import get from 'lodash/get';
import { getFormMeta } from 'redux-form';

export const createCheckFieldIsTouched = (formName: string) => (fieldPath: string) => (_, getState): boolean => {
    const state = getState();
    const formMeta = getFormMeta(formName)(state);
    const fieldMeta = get(formMeta, fieldPath);
    const fieldIsTouched = fieldMeta?.touched;

    return Boolean(fieldIsTouched);
}