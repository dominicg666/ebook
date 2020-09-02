import React, { Component } from 'react';

import './richText.scss';

const toHTML = str => ({ __html: str });

class RichText extends Component {
    render() {
        const { content } = this.props;

        return (
            <div
                className="_richroot"
                dangerouslySetInnerHTML={toHTML(content)}
            />
        );
    }
}

export default RichText;
