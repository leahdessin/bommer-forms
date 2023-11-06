import React, { useState } from 'react';
import BommerFormField from "./BommerFormField";
import BommerFormField2 from "./BommerFormField2";

export default function BommerForm({formData, updateSpecificField, handleSubmit}) {
    // const [textFieldValue, setTextFieldValue] = useState('blah blah');
    // const [emailFieldValue, setEmailFieldValue] = useState('test@test.com');
    // const [numberFieldValue, setNumberFieldValue] = useState('01234');
    // const [birdFieldValue, setBirdFieldValue] = useState('falcon');

    return (
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <h1>Bommer Forms</h1>
            <BommerFormField2 fieldName='Gimme a name' >
              <TextInput onChange={(e) => updateSpecificField("textInput", e.target.value)} value={formData.textInput} />
            </BommerFormField2>
            <BommerFormField fieldType='email' fieldValue={formData.emailInput} setFieldValue={value => updateSpecificField("emailInput", value)} />
              <EmailInput onChange={(e) => updateSpecificField("textInput", e.target.value)} value={formData.textInput} />
            <BommerFormField fieldType='number' fieldValue={formData.numberInput} setFieldValue={value => updateSpecificField("numberInput", value)} />
              <input type="text" onChange={(e) => updateSpecificField("textInput", e.target.value)} value={formData.textInput} />
            <BommerFormField fieldType='select'>
                <select onChange={(e) => updateSpecificField("birdInput", e.target.value)} value={formData.birdInput}>
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
