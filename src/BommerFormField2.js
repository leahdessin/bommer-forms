import React from "react";

export default function BommerFormField2({fieldName, children}) {

    return (
        <div className="form-field">
            <label>
                <span>{fieldName} Input:</span>
                {children}
            </label>
        </div>
    )
}