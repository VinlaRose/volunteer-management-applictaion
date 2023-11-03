import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVolunteer, fetchEvents } from '../redux/actions';

const AddVolunteer = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [skills, setSkills] = useState([]);
  const [availability, setAvailability] = useState('');
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [selectedDays, setSelectedDays] = useState([]);

  const dispatch = useDispatch();
  const allEvents = useSelector(state => state.events)
useEffect(() => {
    dispatch(fetchEvents())
},[dispatch])
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
     
      console.error('Please fill in all required fields.');
      return;
    }

    const newVolunteer = {
      name,
      contactInfo: {
        phone,
        email,
      },
      events : selectedEvent,
      skills,
      availability,
    };

    console.log(newVolunteer);

     dispatch(addVolunteer(newVolunteer));

 
    setName('');
    setAvailability('');
    setEmail('');
    setPhone('');
    setSkills([]);
    setSelectedEvent([]);
  };

  const handleAddSkill = () => {
    if (skills && skills.length > 0) {
      setSkills([...skills, '']);
    } else {
      setSkills(['']);
    }
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };
 
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedEvent(value);
    
  };

 

  const handleDayChange = (e) => {
    const options = e.target.options;
    console.log(options)
   
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedDays.push(options[i].value);
      }
    }
    console.log(selectedDays)
    setSelectedDays(selectedDays);
    setAvailability(selectedDays)
  };
  return (
    <div>
      <h2>Add Volunteers</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Volunteer Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Events:</label>
          <select value={selectedEvent} onChange={handleSelectChange}>
      <option value="">Select an option</option>
      {allEvents.map((event) => (
        <option key={event._id} value={event._id}>
          {event.eventName}
        </option>
      ))}
    </select>
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
      <label htmlFor="daySelector">Select Days:</label>
      <select
        id="daySelector"
        multiple
         
        value={selectedDays}
        onChange={handleDayChange}
      >
        <option value="">Select an option</option>
        {daysOfWeek.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <div>
        <label>Selected Days:</label>
        <div>{selectedDays.join(', ')}</div>
      </div>
      </div>
        <div>
          <label>Skills:</label>
          {skills.map((skill, index) => (
            <div key={index}>
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddSkill}>
            Add Skill
          </button>
        </div>
        <button type="submit">Add Volunteer</button>
      </form>
    </div>
  );
};

export default AddVolunteer;
