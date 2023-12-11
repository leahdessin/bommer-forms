import React from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import { updateValue } from './formDataSlice';
import BommerFormField from "./BommerFormField";
import type { PropertyType, UserProperty } from './lib/ts_exp'

const foo = () => ({ bar: 1 })
export default function BommerForm(props:any) {

    const formState = useAppSelector((state) => state.formData.formData)
    const userPropertiesState = useAppSelector((state) => state.formData.userProperties)
    const userValues = useAppSelector((state) => state.formData.values)
    const dispatch = useAppDispatch()
    const userProps = props.userProps

    const fieldTypeMap = {
        1: 'text',
        2: 'checkbox',
        3: 'select',
        5: 'number',
        6: 'number'
    }

    const renderTypeSpecificField = (userProp:UserProperty) => {
        const newVal = userValues.getValue(userProp)?.value||""
        if (userProp.propertyType._hx_index === 3) {
            return (
                <select defaultValue={newVal}>
                    {userProp.propertyType.values.map(v => (<option value={v}>{v}</option>))}
                </select>
            )
        }
        return (
            <input
                type={fieldTypeMap[userProp.propertyType._hx_index]}
                onChange={(e) =>{
                    console.log(e);
                    dispatch(updateValue({prop: userProp, value: e.target.value}))}
            }
                value={ newVal }
            />)
    }

    const formFields = userProps.map((userProp:UserProperty, index:number) => {
        const fieldType = userProp.propertyType
        return(
            <BommerFormField key={userProp.id} id={userProp.id}>
                <span>{userProp.name}:</span>
                {renderTypeSpecificField(userProp)}
            </BommerFormField>
        )
    })


    return (
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <h1>Bommer Forms</h1>
            {formFields}
            <input type="submit" value="Send it"/>
        </form>
    )
}
