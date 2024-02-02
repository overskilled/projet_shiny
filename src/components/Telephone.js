import React, { useEffect, useState} from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Telephone = () => {


    return (
        <div className="col-lg-6 col-md-12 mt-3 mt-md-0" >
            <fieldset className="p-2">Telephone *</fieldset>
            <PhoneInput 
                className="input-group"
                country={'cm'}
                
                >
                <input type="tel" id="phone" className="form-control"/>
            </PhoneInput>
        </div>
    )
}

export default Telephone;