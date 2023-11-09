import React from "react";

export default function BommerFormField(props) {
    return (
        <div className="form-field">
            <label>
                { props.children }
            </label>
        </div>
    )
}