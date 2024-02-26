 import { createAsyncThunk } from "@reduxjs/toolkit";
 import axios from "axios";
 import apiUrl from "../../../apiUrl";

 const read_workshops = createAsyncThunk(
    'read_workshops',
    async () => {
        try {
            let data = await axios.get(apiUrl + 'workshops')
            return {
                allWorkshops: data.data.response
            }
            
        } catch (error) {
            return{
                allWorkshops: []
            }
        }
    }
 )

 const allWorkshops_action = { read_workshops }
 export default allWorkshops_action