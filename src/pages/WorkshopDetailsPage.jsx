import { useEffect } from "react";
import { useParams } from "react-router-dom";
import WorkshopDetails from "../components/WorkshopDetails";
import Header from "../components/Header/Header";
import Modules from "../components/Modules";
import { useDispatch, useSelector } from "react-redux";
import workshops_actions from "../store/actions/workshops";

export default function WorkshopDetailsPage() {
    const { id } = useParams()
    const workshopDetails_redux = useSelector(store => store.workshops.workshop)
    const dispatch = useDispatch()
    const { read_workshopDetails } = workshops_actions
    
    useEffect(
        () => {
                dispatch( read_workshopDetails( {id: id}) )
            },
        []
    )        
    
        return (
            <>
                <div className="flex flex-col min-h-screen bg-white bg-center bg-cover justify-between"  
                /* style={{backgroundImage: `url(${workshopDetails_redux.photo})`}} */>
                    <Header/>
                    <WorkshopDetails workshop={workshopDetails_redux.workshop} module={workshopDetails_redux.module} />
                    <Modules/>
                </div>
            </>
        );
}
