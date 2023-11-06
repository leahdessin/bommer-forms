import React from "react";

export default function BommerFormField({fieldType, fieldValue, setFieldValue}) {
    return (
        <div className="form-field">
            <label>
                <span>{fieldType} Input:</span>
                <input type={fieldType} onChange={(e) => setFieldValue( e.target.value)} value={fieldValue} />
            </label>
        </div>
    )
}