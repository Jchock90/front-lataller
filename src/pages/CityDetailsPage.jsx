import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CityDetails from "../components/CityDetails";
import Header from "../components/Header/Header";
import Itineraries from "../components/Itineraries";
import { useDispatch, useSelector } from "react-redux";
import cities_actions from "../store/actions/cities";

export default function CityDetailsPage() {
    const { id } = useParams()
    const cityDetails_redux = useSelector(store => store.cities.city)
    const dispatch = useDispatch()
    const { read_cityDetails } = cities_actions
    
    useEffect(
        () => {
                dispatch( read_cityDetails( {id: id}) )
            },
        []
    )        
    
        return (
            <>
                <div className="flex flex-col min-h-screen bg-white bg-center bg-cover justify-between"  
                /* style={{backgroundImage: `url(${cityDetails_redux.photo})`}} */>
                    <Header/>
                    <CityDetails city={cityDetails_redux.city} country={cityDetails_redux.country} />
                    <Itineraries/>
                </div>
            </>
        );
}
