import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";

const read_workshopDetails = createAsyncThunk (
    'read_workshopDetails',

    async ( {id} ) => {
        try {
            let data = await axios.get(apiUrl + 'workshops/workshopdetails/' + id)
            return{
                workshopDetails: data.data.response    
            }
            
        } catch (error) {
            return{
                workshopDetails: []
            }
        }
    }
)
const workshopDetails_action = { read_workshopDetails }
export default workshopDetails_action;