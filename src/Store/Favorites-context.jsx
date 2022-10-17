import { createContext , useState } from "react";
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites : 0,
    addFavorite : (favoriteMeetup) =>{},
    removeFavorite : (meetupID) =>{},
    isItemFavorite : (meetupID)=>{}
});
export function FavoritesContextProvider(props){
    const[userFavorites,setUserFavorites] = useState([]);
    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites)=>{return prevUserFavorites.concat(favoriteMeetup)});
    };
    function removeFavoriteHandler(meetupID){
        setUserFavorites(prevUserFavorites =>{
            return prevUserFavorites.filter(meetup => meetup.id !== meetupID);
        });
    };
    function isFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId );
    };

    const context = {
        favorites: userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite : addFavoriteHandler,
        removeFavorite : removeFavoriteHandler,
        itemIsFavorite : isFavoriteHandler 
    }; 


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}
export default FavoritesContext;