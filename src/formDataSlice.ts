import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { UserProperty, ComponentValues } from './lib/ts_exp'
import {loadPropertiesFromBackend, loadValuesFromBackend} from './mockBackend'
import {ValueAndUnit} from "./lib/ts_exp";

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
    userProperties: UserProperty[],
    values: ComponentValues
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
    userProperties : [],
    values: new ComponentValues()
}

export const fetchPropertiesFromBackend = createAsyncThunk(
    'form-data-slice/fetchPropertiesFromBackend',
    async (thunkAPI) => {
        return await loadPropertiesFromBackend()
    }
)
export const fetchPopulatedPropertiesFromBackend = createAsyncThunk(
    'form-data-slice/fetchPopulatedPropertiesFromBackend',
    async (thunkAPI) => {
        console.log('calling');
        return await loadValuesFromBackend()
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
        updateFormState:(state, action: PayloadAction<UserProperty[]>) => {
            state.userProperties = action.payload
        },
        updateValue: (state, action: PayloadAction<{ prop:UserProperty, value:any }>) => {
            const newValues = state.values.copy()
            //const newValues = new ComponentValues()
            newValues.setValue(action.payload.prop, new ValueAndUnit(action.payload.value, null, null))
            state.values = newValues
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchPropertiesFromBackend.fulfilled, (state, action:PayloadAction<UserProperty[]>) => {
            // Add user to the state array
            state.userProperties = action.payload
        })
        builder.addCase(fetchPopulatedPropertiesFromBackend.fulfilled, (state, action:PayloadAction<ComponentValues>) => {
            // Add user to the state array
            state.values = action.payload
        })
    },
})

export const { updateTextInput, updateEmailInput, updateNumberInput, updateBirdInput, updateFormState, updateValue } = formDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFormData = (state: RootState) => state.formData

export default formDataSlice.reducer