//ACTIONS

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from '../../../apiUrl'

const read_carousel = createAsyncThunk(
    'read_carousel',
    async()=>{
        try {
            let data = await axios.get(apiUrl + 'cities/carousel')

        return {
            carousel: data.data.data
        }
            
        } catch (error) {
            return{
                carousel: []
            }
        }

    }
)

const read_cities = createAsyncThunk(
    'read_cities',
    async ( obj ) => {
        try {
            let data = await axios.get(apiUrl + 'cities?city=' + obj.text )
            return {
                cities: data.data.response,
            }
            
        } catch (error) {
            return{
                cities: []
            }
        }
    }
 )
 
 const read_cityDetails = createAsyncThunk (
     'read_cityDetails',
     
     async ( {id} ) => {
         try {
             let data = await axios.get(apiUrl + 'cities/' + id)
             return{
                 city: data.data.response,
                }
                
            } catch (error) {
                return{
                    city: []
                }
            }
        }
        )

const cities_actions = { read_carousel, read_cities, read_cityDetails }

export default cities_actions

