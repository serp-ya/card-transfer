import * as React from 'react';
import { Field } from 'redux-form';

export const CardInfoPage = React.memo(() => (
    <div>
        Card Info page
        {process.env.REACT_APP_API_URL}
        <Field name="basic-field" component={() => <input />}/>
    </div>
));