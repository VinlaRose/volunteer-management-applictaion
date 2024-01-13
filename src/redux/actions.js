
export const fetchEvents = () => async (dispatch) => {
    try {
      // dispatch({ type: 'FETCH_DATA_LOADING' })
      const response = await fetch(
        'https://3a6c0f80-717c-416f-9f7f-87969ce3e739-00-38g56lzus3htq.global.replit.dev/events'
      );
      const data = await response.json();
      console.log(data);
      dispatch({ type: 'FETCH_EVENT_SUCCESS', payload: data.data });
    } catch (error) {
      console.error('Error fetching income data:', error);
      dispatch({ type: 'FETCH_EVENT_FAILURE' }); 
    }
  };

  export const addEvent = (eventData) => async (dispatch) => {
    try {
      // Dispatch a loading action if needed
      // dispatch({ type: 'ADD_EVENT_LOADING' });
      console.log(eventData)
  
      const response = await fetch('https://3a6c0f80-717c-416f-9f7f-87969ce3e739-00-38g56lzus3htq.global.replit.dev/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
  
      if (!response.ok) {
       
        throw new Error('Failed to add income');
      }
  
      const addedEvent = await response.json();
      console.log(addedEvent.data)
      dispatch({ type: 'ADD_EVENT_SUCCESS', payload: addedEvent.data });
    } catch (error) {
      console.error('Error adding income:', error);
      dispatch({ type: 'ADD_EVENT_FAILURE' });
    }
  };
  
  export const deleteEvent = (eventId) => async (dispatch) => {
    try {
      
      console.log(eventId);
  
      const response = await fetch(`https://3a6c0f80-717c-416f-9f7f-87969ce3e739-00-38g56lzus3htq.global.replit.dev/events/${eventId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        
        throw new Error('Failed to delete event');
      }
  
      const deletedEvent = await response.json();
      console.log(deletedEvent.data);
      dispatch({ type: 'DELETE_EVENT_SUCCESS', payload: deletedEvent.data });
    } catch (error) {
      console.error('Error deleting income:', error);
      dispatch({ type: 'DELETE_EVENT_FAILURE' });
    }
  };
  
  
  export const editEvent = (updatedEvent) => async (dispatch) => {
    try {
      const eventId = updatedEvent._id; 
  
   
      const response = await fetch(`https://3a6c0f80-717c-416f-9f7f-87969ce3e739-00-38g56lzus3htq.global.replit.dev/events/${eventId}`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEvent),
      });
  
      if (!response.ok) {
        throw new Error('Failed to edit event');
      }
  
      const editedEvent = await response.json();
      console.log(editedEvent)
      dispatch({ type: 'EDIT_EVENT_SUCCESS', payload: editedEvent.data });
    } catch (error) {
      console.error('Error editing event:', error);
      dispatch({ type: 'EDIT_EVENT_FAILURE' });
    }
  };
  

  export const fetchVolunteers = () => async (dispatch) => {
    try {
      const response = await fetch('https://3a6c0f80-717c-416f-9f7f-87969ce3e739-00-38g56lzus3htq.global.replit.dev/volunteers');
      const data = await response.json();
      console.log(data);
      dispatch({ type: 'FETCH_VOLUNTEER_SUCCESS', payload: data.data });
    } catch (error) {
      console.error('Error fetching volunteer data:', error);
      dispatch({ type: 'FETCH_VOLUNTEER_FAILURE' });
    }
  };
  
  export const addVolunteer = (volunteerData) => async (dispatch) => {
    try {
      console.log(volunteerData);
  
      const response = await fetch('https://3a6c0f80-717c-416f-9f7f-87969ce3e739-00-38g56lzus3htq.global.replit.dev/volunteers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(volunteerData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add volunteer');
      }
  
      const addedVolunteer = await response.json();
      console.log(addedVolunteer.data);
      dispatch({ type: 'ADD_VOLUNTEER_SUCCESS', payload: addedVolunteer.data });
    } catch (error) {
      console.error('Error adding volunteer:', error);
      dispatch({ type: 'ADD_VOLUNTEER_FAILURE' });
    }
  };
  
  export const deleteVolunteer = (volunteerId) => async (dispatch) => {
    try {
      console.log(volunteerId);
  
      const response = await fetch(`https://3a6c0f80-717c-416f-9f7f-87969ce3e739-00-38g56lzus3htq.global.replit.dev/volunteers/${volunteerId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete volunteer');
      }
  
      const deletedVolunteer = await response.json();
      console.log(deletedVolunteer.data);
      dispatch({ type: 'DELETE_VOLUNTEER_SUCCESS', payload: deletedVolunteer.data });
    } catch (error) {
      console.error('Error deleting volunteer:', error);
      dispatch({ type: 'DELETE_VOLUNTEER_FAILURE' });
    }
  };
  
  export const editVolunteer = (updatedVolunteer) => async (dispatch) => {
    try {
      const volunteerId = updatedVolunteer._id;
  
      const response = await fetch(`https://3a6c0f80-717c-416f-9f7f-87969ce3e739-00-38g56lzus3htq.global.replit.dev/volunteers/${volunteerId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedVolunteer),
      });
  
      if (!response.ok) {
        throw new Error('Failed to edit volunteer');
      }
  
      const editedVolunteer = await response.json();
      console.log(editedVolunteer);
      dispatch({ type: 'EDIT_VOLUNTEER_SUCCESS', payload: editedVolunteer.data });
    } catch (error) {
      console.error('Error editing volunteer:', error);
      dispatch({ type: 'EDIT_VOLUNTEER_FAILURE' });
    }
  };
  