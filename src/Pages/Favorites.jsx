import { useContext } from "react";
import FavoritesContext from "../Store/Favorites-context";
import MeetupList from "../Components/Meetups/MeetupList";


function FavoritesPage() {
    const  favoritesctx = useContext(FavoritesContext);
    let content;
    if(favoritesctx.totalFavorites === 0){
        content = <p>No Favorites added.</p>
    }else{
        content =  <MeetupList meetups = {favoritesctx.favorites}/>
    }
    return(
        <>
            <div><h1>Favorites</h1></div>
           
        {content}
        </>
    );
}

export default FavoritesPage;