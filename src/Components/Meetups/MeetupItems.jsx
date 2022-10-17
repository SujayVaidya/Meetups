import React from 'react';
import Card from "../UI/Card";
import Classes from './MeetupItems.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../Store/Favorites-context';

const MeetupItems = (props) => {
  const favoritesCntx =  useContext(FavoritesContext);
  const itemIsFavorite = favoritesCntx.itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler(){
    if(itemIsFavorite){
      favoritesCntx.removeFavorite(props.id);
    }else{
      favoritesCntx.addFavorite({
        id : props.id,
        title:props.title,
        description:props.description,
        image:props.image,
        address: props.address
      })
    }
  }



  return (
    <li className={Classes.item} >
      <Card>
        <div className={Classes.image} >
          <img src={props.image} alt={props.title}  />  
        </div> 
        <div className={Classes.content} >
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div> 
        <div className={Classes.actions} >
            <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItems