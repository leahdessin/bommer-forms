import React, {FormEvent, useEffect} from 'react';
import './App.css';
import BommerForm from "./BommerForm";
import BommerFormResultBox from "./BommerFormResultBox";
import Counter from "./Counter";
import { useAppSelector, useAppDispatch } from "./hooks";
import {updateFormState, fetchPropertiesFromBackend } from "./formDataSlice";

export default function App() {
    const resultsData = useAppSelector((state) => state.formData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPropertiesFromBackend())
    }, [])

    const populateResultBox = (e:FormEvent) => {
        // only update result box on submit action
        dispatch(updateFormState(resultsData.formData))
        e.preventDefault();
    }

    return (
        <>
            <BommerForm handleSubmit={populateResultBox}/>
            <BommerFormResultBox resultData={resultsData.resultsData} />
            <Counter />
        </>

    );
}
