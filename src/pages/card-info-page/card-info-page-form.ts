import { FunctionComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createCheckFieldIsTouched } from '../../actions';
import { CardInfoPage } from './card-info-page';
import { CARD_INFO_PAGE_FORM } from './card-info-page-constants';

const mapDispatchToProps = {
    checkFieldIsTouched: createCheckFieldIsTouched(CARD_INFO_PAGE_FORM),
};

export const CardInfoPageForm = compose(
    connect(null, mapDispatchToProps),
    reduxForm({
        form: CARD_INFO_PAGE_FORM,
    }),
)(CardInfoPage) as FunctionComponent;