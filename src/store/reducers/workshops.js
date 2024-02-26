// REDUCERS
import { createReducer } from "@reduxjs/toolkit";
import workshops_actions from "../actions/workshops";
const { read_carousel, read_workshops, read_workshopDetails } = workshops_actions

const initial_state = {
    carousel: [],
    workshops: [],
    workshop: {},
}

const workshops_reducer = createReducer(
    initial_state,
    builder => builder.addCase( 
        read_carousel.fulfilled,
        (state,action) => { 
            let new_state = {
                ...state,
                carousel: action.payload.carousel
            }
            return new_state
        }
    )
   .addCase(
            read_workshops.fulfilled,
            (state, action) => {
                let new_state = {
                    ...state,
                    workshops:action.payload.workshops
                }
                return new_state
            }
        )
    .addCase(
        read_workshopDetails.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                workshop: action.payload.workshop
            }
            return new_state
        }
    )

)

export default workshops_reducer

