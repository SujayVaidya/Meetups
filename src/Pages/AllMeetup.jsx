import MeetupList from "../Components/Meetups/MeetupList";
import { useState , useEffect } from "react";
import './AllMeetup.css';





function AllmeetupsPage() {
  const[loading , setLoading] = useState(true);
  const[loadedMeetups , setLoadedMeetups] = useState([]);

  useEffect(()=>{
    setLoading(true);
      fetch('https://sujaymeetup-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json').then(respose => {
    return respose.json();
  }).then(data => {
    const meetups = [];
    for (const key in data){
      const meetup = {
        id : key,
        ...data[key]
      }
      meetups.push(meetup);
    }
    
      setLoading(false);
      setLoadedMeetups(meetups);
  });
  },[]);



  
    if (loading) {
      return (
        <section>
          <div className="loader"></div>
        </section>
      )
    }






 return(
<>
   <section>
    <h1>All Meetups</h1>
    <MeetupList meetups={loadedMeetups} />
    </section>
        
</>
 );
}

export default AllmeetupsPage;