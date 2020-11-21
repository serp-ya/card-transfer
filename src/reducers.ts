import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { cardInfoPageReducer, CARD_INFO_PAGE_STORE } from './pages/card-info-page';

export const reducers = combineReducers({
    'form': formReducer,
    [CARD_INFO_PAGE_STORE]: cardInfoPageReducer,
});