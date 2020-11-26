import { ECreditCardForm } from './credit-card-enum';

export type TCreditCardForm = {
    [ECreditCardForm.CardNumber]: string;
    [ECreditCardForm.CardExpires]?: string;
    [ECreditCardForm.CardCvc]?: string;
};