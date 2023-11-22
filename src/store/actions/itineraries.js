import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";

const read_itineraries_from_city = createAsyncThunk(
    'read_itineraries_from_city',
    async ( obj ) => {
        try {
            let data = await axios.get(apiUrl + 'itineraries?city_id=' + obj.city_id )
            return {
                itineraries: data.data.response
            }

        } catch (error) {
            return{
                itineraries: []
            }
        }
    }
)

const itinerary_action = { read_itineraries_from_city }
export default itinerary_action

