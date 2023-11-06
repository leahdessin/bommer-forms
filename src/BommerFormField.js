import React from "react";

export default function BommerFormField({fieldType, fieldValue, setFieldValue, children}) {

    const theRealChildren = children || <input type={fieldType} onChange={(e) => setFieldValue( e.target.value)} value={fieldValue} />
    return (
        <div className="form-field">
            <label>
                <span>{fieldType} Input:</span>
                {theRealChildren}
            </label>
        </div>
    )
}