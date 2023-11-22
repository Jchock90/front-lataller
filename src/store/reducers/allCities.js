 import { createReducer } from "@reduxjs/toolkit";
 import allCities_action from '../actions/allCities';

 const { read_cities } = allCities_action

 const initial_state = {
    allCities: []
 }

 const allCities_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        read_cities.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                cities:action.payload.cities,
                allCities:action.payload.allCities
                
            }
            return new_state
        }
    )
 )

 export default allCities_reducer