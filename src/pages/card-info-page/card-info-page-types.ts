import type { TCreditCardForm } from '../../modules/credit-card';
import { ECardInfoFields } from './card-info-page-enum';

export type TCreditCardInfoPageFormValues = {
    [ECardInfoFields.From]: TCreditCardForm;
    [ECardInfoFields.To]: TCreditCardForm;
    [ECardInfoFields.Money]: string;
};

export type TCreditCardInfoPageFormErrors = {
    [ECardInfoFields.From]?: TCreditCardForm;
    [ECardInfoFields.To]?: TCreditCardForm;
    [ECardInfoFields.Money]: string;
};