import { createReducer } from "@reduxjs/toolkit";
import itinerary_action from "../actions/itineraries";

const { read_itineraries_from_city } = itinerary_action

const initial_state = {
    itineraries: []
}

const itinerary_reducer = createReducer(
    initial_state,
    builder => builder
        .addCase(
            read_itineraries_from_city.fulfilled,
            (state, action) => {
                let new_state = {
                    ...state,
                    itineraries: action.payload.itineraries
                }
                return new_state
            }
        )
)

export default itinerary_reducer