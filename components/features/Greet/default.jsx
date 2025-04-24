import React from 'react';
import PropTypes from '@arc-fusion/prop-types';

const Greet = ( { customFields }) => (
    <div className="hello_text">
        Hello
        {customFields.name || 'user'}
        !
    </div>
);

Greet.Proptypes = {
    customFields: PropTypes.shape({
        name: PropTypes.string.tag({
            label: 'Name',
            description: 'Whats is your name?',
        }),
    }),
};

export default Greet;