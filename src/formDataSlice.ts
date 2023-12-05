import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { UserProperty } from './lib/ts_exp'
import { loadPropertiesFromBackend } from './mockBackend'

// Define a type for the slice state
export interface FormDataPart {
    textInput: string,
    emailInput: string,
    numberInput: string,
    birdInput: string,
}
export interface FormDataState {
    formData: FormDataPart,
    resultsData : FormDataPart,
    userProperties: UserProperty[]
}

// Define the initial state using that type
const initialState: FormDataState = {
    formData : {
        textInput: "james",
        emailInput: "jray@bommer.io",
        numberInput: "12345",
        birdInput: "crow",
    },
    resultsData : {
        textInput: '',
        emailInput: '',
        numberInput: '',
        birdInput: '',
    },
    userProperties : []
}

export const fetchPropertiesFromBackend = createAsyncThunk(
    'form-data-slice/fetchPropertiesFromBackend',
    async (thunkAPI) => {
        return await loadPropertiesFromBackend()
    }
)

export const formDataSlice = createSlice({
    name: 'form-data-slice',
    initialState,
    reducers: {
        updateTextInput: (state, action: PayloadAction<string>) => {
            state.formData.textInput = action.payload
        },
        updateEmailInput: (state, action: PayloadAction<string>) => {
            state.formData.emailInput = action.payload
        },
        updateNumberInput: (state, action: PayloadAction<string>) => {
            state.formData.numberInput = action.payload
        },
        updateBirdInput: (state, action: PayloadAction<string>) => {
            state.formData.birdInput = action.payload
        },
        updateFormState:(state, action: PayloadAction<FormDataPart>) => {
            state.resultsData = action.payload
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchPropertiesFromBackend.fulfilled, (state, action:PayloadAction<UserProperty[]>) => {
            // Add user to the state array
            state.userProperties = action.payload
        })
    },
})

export const { updateTextInput, updateEmailInput, updateNumberInput, updateBirdInput, updateFormState } = formDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFormData = (state: RootState) => state.formData

export default formDataSlice.reducer