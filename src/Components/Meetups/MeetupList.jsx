import React from 'react'
import classes from './MeetupList.module.css';
import MeetupItems from './MeetupItems';
const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
        {props.meetups.map((meetup)=><MeetupItems key={meetup.id} 
        id = {meetup.id} 
        image= {meetup.image} title={meetup.title} description = {meetup.description} />)}
    </ul>
  )
}

export default MeetupList