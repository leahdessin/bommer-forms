import React, {FormEvent, useState} from 'react';
import './App.css';
import BommerForm from "./BommerForm";
import BommerFormResultBox from "./BommerFormResultBox";

export default function App() {
    const [formResults, setFormResults] = useState({
        // also functions as initial state to `bommerFormData`
        textInput: "james",
        emailInput: "jray@bommer.io",
        numberInput: "0243432",
        birdInput: "crow",
    })

    const [bommerFormData, setBommerFormData] = useState({
        ...formResults
    })

    const populateResultBox = (e:FormEvent) => {
        // only update result box on submit action
        setFormResults({...bommerFormData});
        e.preventDefault();
    }

    return (
        <>
            <BommerForm formData={bommerFormData} setFormData={setBommerFormData} handleSubmit={populateResultBox}/>
            <BommerFormResultBox resultData={formResults} />
        </>

    );
}
