import { createReducer } from "@reduxjs/toolkit";
import workshopDetails_action from '../actions/workshopDetails';

const { read_workshopDetails } = workshopDetails_action

const initial_state = {
    workshopDetails:[]
}

const workshopDetails_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        read_workshopDetails.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                workshopDetails: action.payload.workshopDetails
            }
            return new_state
        }
    )
)

export default workshopDetails_reducer