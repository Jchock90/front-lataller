import { createReducer } from "@reduxjs/toolkit";
import cityDetails_action from '../actions/cityDetails';

const { read_cityDetails } = cityDetails_action

const initial_state = {
    cityDetails:[]
}

const cityDetails_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        read_cityDetails.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                cityDetails: action.payload.cityDetails
            }
            return new_state
        }
    )
)

export default cityDetails_reducer