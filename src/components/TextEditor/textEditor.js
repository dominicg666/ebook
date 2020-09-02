import React, { useEffect } from 'react';
import './textEditor.scss';
import { asField } from 'informed';
import CKEditor from 'ckeditor4-react';

const TextEditor = props => {
    const { fieldApi, fieldState, initialValue = '', onChange, ...restProps } = props;
    console.log(fieldState.value);

    useEffect(() => {
        if (initialValue && !value) fieldApi.setValue(initialValue);
    }, [initialValue]);

    const onChangeValue = value => {
        fieldApi.setTouched(true);
        fieldApi.setValue(value);
        if (onChange) onChange(value);
    };

    return (
        <CKEditor
            data={fieldState.value}
            onChange={evt => onChangeValue(evt.editor.getData())}
        />
    );
};


export default asField(TextEditor);
