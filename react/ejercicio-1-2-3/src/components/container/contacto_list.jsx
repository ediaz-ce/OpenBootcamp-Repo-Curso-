import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactComponent from '../pure/contacto';

const Contactolist = () => {

    const defaultContact = new Contacto('Erick', 'Diaz', 'centeno@live.com', true)

    return (
        <div>
            <h1>Contacto:</h1>
            <ContactComponent contacto={defaultContact}></ContactComponent>
        </div>
    );
};


export default Contactolist;

