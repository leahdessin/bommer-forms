import React from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import { updateTextInput, updateEmailInput, updateNumberInput, updateBirdInput, updateFormState } from './formDataSlice';
import BommerFormField from "./BommerFormField";
import type { PropertyType, UserProperty } from './lib/ts_exp'

export default function BommerForm(props:any) {

    const formState = useAppSelector((state) => state.formData.formData)
    const userPropertiesState = useAppSelector((state) => state.formData.userProperties)
    const dispatch = useAppDispatch()
    const userProps = props.userProps

    const fieldTypeMap = {
        'Text': 'text',
        'TrueFalse': 'checkbox',
        'MultipleChoice': 'select',
        'Decimal': 'number',
        'Number': 'number'
    }

    const renderTypeSpecificField = (fieldType:PropertyType) => {
        if (fieldType._name === "MultipleChoice") {
            return (
                <select>
                    {fieldType.values.map(v => (<option value={v}>v</option>))}
                </select>
            )
        }

        return (
            <input
                type={fieldTypeMap[fieldType._name]}
                onChange={(e) => dispatch(updateFormState(userPropertiesState))}
            />)
    }

    const formFields = userProps.map((userProp:UserProperty, index:number) => {
        console.log(userProp);
        const fieldType = userProp.propertyType
        return(
            <BommerFormField id={userProp.id}>
                <span>{userProp.name}</span>
                {renderTypeSpecificField(fieldType)}
            </BommerFormField>
        )
    })


    return (
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <h1>Bommer Forms</h1>
            {formFields}
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
