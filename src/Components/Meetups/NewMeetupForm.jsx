import classes from './NewMeetupForm.module.css';
import Card from '../UI/Card';
import React from 'react';
import { useRef } from 'react';

const NewMeetupForm = (props) => {
    const titleInputRef = useRef();
    const addressInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

  function submitHandler(event){
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const meetupData = {
          title : enteredTitle,
          image : enteredImage,
          address : enteredAddress,
          description : enteredDescription
        };
       // console.log(meetupData);
       props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit = {submitHandler} >
        <div className={classes.control}>
          <label htmlFor = 'Title'>Meetup Title</label>
            <input type="text" name="Title" required id="Title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor = 'Image'>Meetup Image</label>
            <input type="url" name="Image" required id="Image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor = 'Address'>Meetup Address</label>
            <input type="text" name="Address" required id="Address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor = 'Description'>Description</label>
            <textarea name="Description" required id="Description"  rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>

      </form>



    </Card>
  )
}

export default NewMeetupForm