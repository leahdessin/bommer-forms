import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { UserProperty, ComponentValues } from './lib/ts_exp'
import { loadPropertiesFromBackend, loadValuesFromBackend, saveValuesToBackend } from './mockBackend'
import {ValueAndUnit} from "./lib/ts_exp";

export interface FormDataState {
    userProperties: UserProperty[],
    values: ComponentValues,
}

// Define the initial state using that type
const initialState: FormDataState = {
    userProperties : [],
    values: new ComponentValues(),
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
        return await loadValuesFromBackend()
    }
)
export const sendPropertiesToBackend = createAsyncThunk(
    'form-data-slice/sendPropertiesToBackend',
    async (newValues:ComponentValues, thunkAPI) => {
        return saveValuesToBackend(newValues)
    }
)

export const formDataSlice = createSlice({
    name: 'form-data-slice',
    initialState,
    reducers: {
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
            state.userProperties = action.payload
        })
        builder.addCase(fetchPopulatedPropertiesFromBackend.fulfilled, (state, action:PayloadAction<ComponentValues>) => {
            state.values = action.payload
        })
        builder.addCase(sendPropertiesToBackend.fulfilled, (state, action:PayloadAction<boolean>) => {
            console.log('Did it work? ' + action.payload);
        })
    },
})

export const { updateFormState, updateValue } = formDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFormData = (state: RootState) => state.formData

export default formDataSlice.reducer