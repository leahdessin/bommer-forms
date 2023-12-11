import React, {FormEvent, useEffect} from 'react';
import './App.css';
import BommerForm from "./BommerForm";
import { useAppSelector, useAppDispatch } from "./hooks";
import {updateFormState, fetchPropertiesFromBackend, fetchPopulatedPropertiesFromBackend } from "./formDataSlice";


export default function App() {
    const resultsData = useAppSelector((state) => state.formData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPropertiesFromBackend())
        dispatch(fetchPopulatedPropertiesFromBackend())
    }, [])

    return (
        <>
            <BommerForm userProps={resultsData.userProperties} />
        </>

    );
}
