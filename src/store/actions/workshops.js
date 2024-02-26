//ACTIONS

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from '../../../apiUrl'

const read_carousel = createAsyncThunk(
    'read_carousel',
    async()=>{
        try {
            let data = await axios.get(apiUrl + 'workshops/carousel')

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

const read_workshops = createAsyncThunk(
    'read_workshops',
    async ( obj ) => {
        try {
            let data = await axios.get(apiUrl + 'workshops?workshop=' + obj.text )
            return {
                workshops: data.data.response,
            }
            
        } catch (error) {
            return{
                workshops: []
            }
        }
    }
 )
 
 const read_workshopDetails = createAsyncThunk (
     'read_workshopDetails',
     
     async ( {id} ) => {
         try {
             let data = await axios.get(apiUrl + 'workshops/' + id)
             return{
                 workshop: data.data.response,
                }
                
            } catch (error) {
                return{
                    workshop: []
                }
            }
        }
        )

const workshops_actions = { read_carousel, read_workshops, read_workshopDetails }

export default workshops_actions

