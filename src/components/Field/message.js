import React, { Component } from 'react';
import { node, shape, string } from 'prop-types';

import './message.scss';

export class Message extends Component {
    static propTypes = {
        children: node,
        classes: shape({
            root: string,
            root_error: string
        }),
        fieldState: shape({
            asyncError: string,
            error: string
        })
    };

    render() {
        const { children, fieldState } = this.props;
        const { asyncError, error } = fieldState;
        const errorMessage = error || asyncError;
        const className = errorMessage ? `form-text message_root_error` : `form-text message_root`;

        return <p className={className}>{errorMessage || children}</p>;
    }
}

export default Message;
