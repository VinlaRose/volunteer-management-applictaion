import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, editEvent, deleteEvent } from "../redux/actions";
import AddEvent from "../components/AddEvent";

export const EventsPage = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const [editingEventId, setEditingEventId] = useState(null);
  const [editedItemData, setEditedItemData] = useState({});

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const handleEditEvent = (event) => {
    setEditingEventId(event._id);
    setEditedItemData({ ...event });
  };

  const handleSaveEvent = (updatedEvent) => {
    
    dispatch(editEvent(updatedEvent));
    setEditingEventId(null);
  };

  const handleCancelEdit = () => {
    setEditingEventId(null);
  };

  const handleDeleteEvent = (id) => {
    dispatch(deleteEvent(id)); 
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItemData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Events Page</h1>
      <AddEvent />
      <div className="event-cards">
        {events.map((event) => (
          <div key={event._id} className="event-card">
            {editingEventId === event._id ? (
              <div>
                <input
                  type="text"
                  name="eventName"
                  value={editedItemData.eventName}
                  onChange={handleEditInputChange}
                />
                <input
                  type="text"
                  name="date"
                  value={editedItemData.date}
                  onChange={handleEditInputChange}
                />
                <input
                  type="text"
                  name="location"
                  value={editedItemData.location}
                  onChange={handleEditInputChange}
                />
                <input
                  type="text"
                  name="description"
                  value={editedItemData.description}
                  onChange={handleEditInputChange}
                />
                <input
                  type="text"
                  name="requiredVolunteerRoles"
                  value={editedItemData.requiredVolunteerRoles.join(",")}
                  onChange={handleEditInputChange}
                />
                <button onClick={() => handleSaveEvent(editedItemData)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                <p><strong>Event Name:</strong> {event.eventName}</p>
                <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Description:</strong> {event.description}</p>
                <p><strong>Required Volunteer Roles:</strong> {event.requiredVolunteerRoles.join(", ")}</p>
              </div>
            )}
            <div className="button-container">
              <button onClick={() => handleEditEvent(event)}>Edit</button>
              <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
