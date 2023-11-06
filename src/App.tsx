import React, {FormEvent, useState} from 'react';
import './App.css';
import BommerForm from "./BommerForm";
import BommerFormResultBox from "./BommerFormResultBox";

export default function App() {
    const [bommerFormData, setBommerFormData] = useState({
        textInput: "",
        emailInput: "",
        numberInput: "",
        birdInput: "",
    })

    const populateResultBox = (e:FormEvent) => {
        console.log('test');
        e.preventDefault();
    }

    return (
        <>
            <BommerForm handleSubmit={populateResultBox}/>
            <BommerFormResultBox />
        </>

    );
}
