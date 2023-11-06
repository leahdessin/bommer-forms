import React, {FormEvent, useState} from 'react';
import './App.css';
import BommerForm from "./BommerForm";
import BommerFormResultBox from "./BommerFormResultBox";


export default function App() {
    const [bommerFormData, setBommerFormData] = useState({
        textInput: "blah blah",
        emailInput: "test@test.com",
        numberInput: "01234",
        birdInput: "falcon",
    })

    const populateResultBox = (e:FormEvent) => {
        console.log('test');
        e.preventDefault();
    }

    const updatePartialState = (updates:object) => {
        const newState = {...bommerFormData, ...updates}
        setBommerFormData(newState)
    }


    const updateSpecificField = (k:string, v:string) => {
        const update = {...bommerFormData}
        if (k == "textInput") {
            update.textInput = v;
        }
        if (k == "emailInput") {
            update.emailInput = v;
        }
        if (k == "numberInput") {
            update.numberInput = v;
        }
        if (k == "birdInput") {
            update.birdInput = v;
        }
        setBommerFormData(update)
    }

    return (
        <>
            <BommerForm
                formData={bommerFormData}
                // setFormData={setBommerFormData}
                updateSpecificField={updateSpecificField}
                handleSubmit={populateResultBox} />
            <BommerFormResultBox />
        </>

    );
}
