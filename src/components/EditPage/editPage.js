import React from 'react';
import './editPage.scss';

import { Form } from 'informed';
import TextInput from '../TextInput';
import Field from '../Field';
import TextEditor from '../TextEditor';
import { useEditPage } from '../../Hooks/EditPage/useEditPage'

const EditPage = props => {
    const {
        setFormApi,
        handleSubmit,
        handleGoback
    } = useEditPage()


    // console.log(localStorage);


    return (
        <div className="container">
            <h2>Create Page</h2>
            <Form
                getApi={setFormApi}
                className=""
                onSubmit={handleSubmit}
            >
                <Field label="Page Title">
                    <TextInput
                        field="page_title"
                    />
                </Field>
                <Field label="Body">
                    <TextEditor
                        field="page_body"
                    />
                </Field>
                <button type="submit" class="btn btn-primary">Save Page</button> &nbsp;
                <button type="button" class="btn btn-secondary" onClick={handleGoback}>Back to Page</button>

            </Form>
        </div >
    );
};


export default EditPage;
