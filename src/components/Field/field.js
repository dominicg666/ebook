import React from 'react';
import { bool, node, shape, string } from 'prop-types';
import './field.scss';

const Field = props => {
    const { children, id, label, required } = props;
    const requiredSymbol = required ? (
        <span className="field_requiredSymbol" />
    ) : null;

    return (
        <div className="field_root form-group">
            <label className="field_label" htmlFor={id}>
                {requiredSymbol}
                {label}
            </label>
            {children}
        </div>
    );
};

Field.propTypes = {
    children: node,
    classes: shape({
        label: string,
        root: string
    }),
    id: string,
    label: node,
    required: bool
};

export default Field;
