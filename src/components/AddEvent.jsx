import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent } from '../redux/actions';

const AddEvent = () => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [requiredVolunteerRoles, setRequiredVolunteerRoles] = useState([]);
  const dispatch = useDispatch()
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const dateTimeString = `${date}T${time}:00.000Z`;

    const newEvent = {
      eventName,
      date: dateTimeString,
      location,
      description,
      requiredVolunteerRoles,
    };

    console.log(newEvent);
    
dispatch(addEvent(newEvent));
    

    setEventName('');
    setDate('');
    setTime('');
    setLocation('');
    setDescription('');
    setRequiredVolunteerRoles([]);
   
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Required Volunteer Roles:</label>
          <input
            type="text"
            value={requiredVolunteerRoles}
            onChange={(e) => setRequiredVolunteerRoles(e.target.value.split(','))}
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
