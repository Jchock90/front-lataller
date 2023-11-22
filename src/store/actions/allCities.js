 import { createAsyncThunk } from "@reduxjs/toolkit";
 import axios from "axios";
 import apiUrl from "../../../apiUrl";

 const read_cities = createAsyncThunk(
    'read_cities',
    async () => {
        try {
            let data = await axios.get(apiUrl + 'cities')
            return {
                allCities: data.data.response
            }
            
        } catch (error) {
            return{
                allCities: []
            }
        }
    }
 )

 const allCities_action = { read_cities }
 export default allCities_action