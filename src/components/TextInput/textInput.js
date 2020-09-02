import React, { Component, Fragment } from 'react';
import { node, number, oneOfType, shape, string } from 'prop-types';
import { BasicText, asField } from 'informed';
import { compose } from 'redux';

import {  Message } from '../Field';
import './textInput.scss';

export class TextInput extends Component {
    static propTypes = {
        after: node,
        before: node,
        classes: shape({
            input: string
        }),
        fieldState: shape({
            value: oneOfType([string, number])
        }),
        message: node
    };

    render() {
        const {
            after,
            before,
            classes,
            fieldState,
            message,
            validationIcon,
            ...rest
        } = this.props;


       
        return (
            <Fragment >
                <BasicText
                    {...rest}
                    fieldState={fieldState}
                    className="input form-control"
                />
                <Message fieldState={fieldState} >{message}</Message>
            </Fragment>
        );
    }
}

export default compose(
    asField
)(TextInput);
