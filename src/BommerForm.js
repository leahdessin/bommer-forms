import BommerFormField from "./BommerFormField";

export default function BommerForm(props) {

    return (
        <form onSubmit={(e)=>{props.handleSubmit(e)}}>
            <h1>Bommer Forms</h1>
            <BommerFormField>
                <span>Name Input:</span>
                <input type="text" onChange={(e) => props.setFormData({...props.formData, textInput: e.target.value})} value={props.formData.textInput} />
            </BommerFormField>
            <BommerFormField>
                <span>Number Input:</span>
                <input type="email" onChange={(e) => props.setFormData({...props.formData, emailInput: e.target.value})} value={props.formData.emailInput} />
            </BommerFormField>
            <BommerFormField>
                <span>Number Input:</span>
                <input type="number" onChange={(e) => props.setFormData({...props.formData, numberInput: e.target.value})} value={props.formData.numberInput} />
            </BommerFormField>
            <BommerFormField fieldType='select'>
                <span>Bird Input:</span>
                <select onChange={(e) => props.setFormData({...props.formData, birdInput: e.target.value})} value={props.formData.birdInput}>
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
