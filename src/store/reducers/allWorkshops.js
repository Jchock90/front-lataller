 import { createReducer } from "@reduxjs/toolkit";
 import allWorkshops_action from '../actions/allWorkshops';

 const { read_workshops } = allWorkshops_action

 const initial_state = {
    allWorkshops: []
 }

 const allWorkshops_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        read_workshops.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                workshops:action.payload.workshops,
                allWorkshops:action.payload.allWorkshops
                
            }
            return new_state
        }
    )
 )

 export default allWorkshops_reducer