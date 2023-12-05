import React from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import { updateTextInput, updateEmailInput, updateNumberInput, updateBirdInput, updateFormState } from './formDataSlice';
import BommerFormField from "./BommerFormField";

export default function BommerForm(props:any) {

    const formState = useAppSelector((state) => state.formData.formData)
    const dispatch = useAppDispatch()

    return (
        <form onSubmit={(e)=>{props.handleSubmit(e)}}>
            <h1>Bommer Forms</h1>
            <BommerFormField>
                <span>Name Input:</span>
                <input type="text" onChange={(e) => dispatch(updateTextInput(e.target.value)) } value={formState.textInput} />
            </BommerFormField>
            <BommerFormField>
                <span>Email Input:</span>
                <input type="email" onChange={(e) => dispatch(updateEmailInput(e.target.value)) } value={formState.emailInput} />
            </BommerFormField>
            <BommerFormField>
                <span>Number Input:</span>
                <input type="number" onChange={(e) => dispatch(updateNumberInput(e.target.value)) } value={formState.numberInput} />
            </BommerFormField>
            <BommerFormField fieldType='select'>
                <span>Bird Input:</span>
                <select onChange={(e) => dispatch(updateBirdInput(e.target.value)) } value={formState.birdInput}>
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
