import React from 'react'
import { InputField } from './stories/Input.stories';
import { Large } from './stories/Button.stories';
const Form = () => {

    return (
            <div className='form-input'>
                <p><InputField
                    label={'First Name'}
                    placeholder={'Enter first name'}
                /></p>
                <p><InputField
                    label={'Last Name'}
                    placeholder={'Enter last name'}
                /></p>
                <p><InputField
                    label={'Email'}
                    placeholder={'Enter email'}
                /></p>
                <p><InputField
                    label={'Contact Number'}
                    placeholder={'Enter contact number'}
                /></p>
            <Large label={'Submit'} backgroundColor={'aqua'} />
            </div>

    )
}

export default Form;
