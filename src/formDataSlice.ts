import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
export interface FormDataState {
    textInput: string,
    emailInput: string,
    numberInput: string,
    birdInput: string,
}

// Define the initial state using that type
const initialState: FormDataState = {
    textInput: "james",
    emailInput: "jray@bommer.io",
    numberInput: "12345",
    birdInput: "crow",
}

export const formDataSlice = createSlice({
    name: 'form-data-slice',
    initialState,
    reducers: {
        updateTextInput: (state, action: PayloadAction<string>) => {
            state.textInput = action.payload
        },
        updateEmailInput: (state, action: PayloadAction<string>) => {
            state.emailInput = action.payload
        },
        updateNumberInput: (state, action: PayloadAction<string>) => {
            state.numberInput = action.payload
        },
        updateBirdInput: (state, action: PayloadAction<string>) => {
            state.birdInput = action.payload
        },
        updateFormState:(state, action: PayloadAction<FormDataState>) => {
            state = action.payload
        },
    },
})

export const { updateTextInput, updateEmailInput, updateNumberInput, updateBirdInput, updateFormState } = formDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFormData = (state: RootState) => state.formData

export default formDataSlice.reducer