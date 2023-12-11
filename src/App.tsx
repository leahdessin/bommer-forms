import React, {FormEvent, useEffect} from 'react';
import './App.css';
import BommerForm from "./BommerForm";
import { useAppSelector, useAppDispatch } from "./hooks";
import { fetchPropertiesFromBackend, fetchPopulatedPropertiesFromBackend, sendPropertiesToBackend } from "./formDataSlice";


export default function App() {
    const formData = useAppSelector((state) => state.formData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPropertiesFromBackend())
        dispatch(fetchPopulatedPropertiesFromBackend())
    }, [])

    const submitAction = (e:FormEvent) => {
        e.preventDefault();
        dispatch(sendPropertiesToBackend(formData.values))
    }

    return (
        <>
            <BommerForm onSubmitAction={submitAction} userProps={formData.userProperties} />
        </>

    );
}
