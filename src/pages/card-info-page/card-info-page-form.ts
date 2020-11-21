import { reduxForm } from 'redux-form';
import { CardInfoPage } from './card-info-page';
import { CARD_INFO_PAGE_FORM } from './card-info-page-constants';

export const CardInfoPageForm = reduxForm({
    form: CARD_INFO_PAGE_FORM,
})(CardInfoPage);