import React, {FormEvent} from 'react';
import './App.css';
import BommerForm from "./BommerForm";
import BommerFormResultBox from "./BommerFormResultBox";
import Counter from "./Counter";
import {useAppSelector} from "./hooks";

export default function App() {
    const formState = useAppSelector((state) => state.formData)

    const populateResultBox = (e:FormEvent) => {
        // only update result box on submit action
        e.preventDefault();
    }

    return (
        <>
            <BommerForm handleSubmit={populateResultBox}/>
            <BommerFormResultBox resultData={formState} />
            <Counter />
        </>

    );
}
