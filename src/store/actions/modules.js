import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";

const read_modules_from_workshop = createAsyncThunk(
    'read_modules_from_workshop',
    async ( obj ) => {
        try {
            let data = await axios.get(apiUrl + 'modules?workshop_id=' + obj.workshop_id )
            return {
                modules: data.data.response
            }

        } catch (error) {
            return{
                modules: []
            }
        }
    }
)

const module_action = { read_modules_from_workshop }
export default module_action

