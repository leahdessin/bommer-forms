import React, { useState } from 'react';
import BommerFormField from "./BommerFormField";

export default function BommerForm(props) {
    const [textFieldValue, setTextFieldValue] = useState('blah blah');
    const [emailFieldValue, setEmailFieldValue] = useState('test@test.com');
    const [numberFieldValue, setNumberFieldValue] = useState('01234');
    const [birdFieldValue, setBirdFieldValue] = useState('falcon');

    return (
        <form onSubmit={(e)=>{props.handleSubmit(e)}}>
            <h1>Bommer Forms</h1>
            <BommerFormField fieldType='text' fieldValue={textFieldValue} setFieldValue={setTextFieldValue} />
            <BommerFormField fieldType='email' fieldValue={emailFieldValue} setFieldValue={setEmailFieldValue} />
            <BommerFormField fieldType='number' fieldValue={numberFieldValue} setFieldValue={setNumberFieldValue} />
            <BommerFormField fieldType='select'>
                <select onChange={(e) => setBirdFieldValue(e.target.value)} value={birdFieldValue}>
                    <option value="owl">Owl</option>
                    <option value="crow">Crow</option>
                    <option value="falcon">Falcon</option>
                    <option value="hawk">Hawk</option>
                </select>
            </BommerFormField>
            <input type="submit" value="Send it"/>
        </form>
    )
}
