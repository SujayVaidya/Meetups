import NewMeetupForm from "../Components/Meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupsPage() {
  const history = useNavigate();
  function addMeetupHandler(meetupData) {
    //sending http request
    fetch('https://sujaymeetup-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',{
      method:'POST',
      body : JSON.stringify(meetupData),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(()=>{
      history('/');
    });
  }
    return(
    <>
     <section>
      <h1> Add new Meetup</h1>
       <NewMeetupForm onAddMeetup ={addMeetupHandler}/>

     </section>
    </>
    );
}
export default NewMeetupsPage;