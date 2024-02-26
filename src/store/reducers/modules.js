import { createReducer } from "@reduxjs/toolkit";
import module_action from "../actions/modules";

const { read_modules_from_workshop } = module_action

const initial_state = {
    modules: []
}

const module_reducer = createReducer(
    initial_state,
    builder => builder
        .addCase(
            read_modules_from_workshop.fulfilled,
            (state, action) => {
                let new_state = {
                    ...state,
                    modules: action.payload.modules
                }
                return new_state
            }
        )
)

export default module_reducer