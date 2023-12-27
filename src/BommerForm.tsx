import React from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import { updateValue } from './formDataSlice';
import BommerFormField from "./BommerFormField";
import type { UserProperty } from './lib/ts_exp'
import styles from "./BommerForm.module.scss"

export default function BommerForm(props:any) {

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

    /*
    const StyledInput = styled.input`
      height: 1.5em;
      border: 1px solid #aaa;
      border-radius: 3px;
      padding: 5px;
      
      &:focus {
        border: 1px solid #000; 
        outline: none;
      }
    `;*/

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
                className={styles.input}
                type={fieldTypeMap[userProp.propertyType._hx_index]}
                onChange={(e) =>{
                    const targetVal = e.target.value || e.target.checked;
                    dispatch(updateValue({prop: userProp, value: targetVal}))}
            }
                checked={ newVal }
                value={ newVal }
            />)
    }

    const formFields = userProps.map((userProp:UserProperty) => {
        return(
            <BommerFormField key={userProp.id} id={userProp.id}>
                <span>{userProp.name}:</span>
                {renderTypeSpecificField(userProp)}
            </BommerFormField>
        )
    })

    /*
    const Title = styled.h1`
      font-size: 3em;
      text-align: center;
      color: blue;
    `;*/


    return (
        <form onSubmit={props.onSubmitAction}>
            <h1 className={styles.tltle}>Bommer Forms</h1>
            {formFields}
            <input type="submit" value="Send it"/>
        </form>
    )
}
