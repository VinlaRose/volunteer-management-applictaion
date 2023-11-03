const initialState = {
  events: [],
  volunteers: [],
  loading: false,
  error: null,
};

const volunteersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EVENT_SUCCESS':
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_EVENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error fetching event data',
      };

    case 'FETCH_DATA_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'ADD_EVENT_SUCCESS':
      return {
        ...state,
        events: [...state.events, action.payload],
        loading: false,
        error: null,
      };

    case 'ADD_EVENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error adding event',
      };

    case 'EDIT_EVENT_SUCCESS':
      const updatedEventIndex = state.events.findIndex((event) => event._id === action.payload._id);
      const updatedEvent = [...state.events];

      if (updatedEventIndex !== -1) {
        updatedEvent[updatedEventIndex] = action.payload;
      }

      return {
        ...state,
        events: updatedEvent,
        loading: false,
        error: null,
      };

    case 'EDIT_EVENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error editing event',
      };

    case 'DELETE_EVENT_SUCCESS':
      const updatedEvents = state.events.filter((event) => event._id !== action.payload._id);
      return {
        ...state,
        events: updatedEvents,
        loading: false,
        error: null,
      };

    case 'DELETE_EVENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error deleting event',
      };

    case 'FETCH_VOLUNTEER_SUCCESS':
      return {
        ...state,
        volunteers: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_VOLUNTEER_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error fetching volunteer data',
      };

    case 'ADD_VOLUNTEER_SUCCESS':
      return {
        ...state,
        volunteers: [...state.volunteers, action.payload],
        loading: false,
        error: null,
      };

    case 'ADD_VOLUNTEER_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error adding volunteer',
      };

    case 'EDIT_VOLUNTEER_SUCCESS':
      const updatedVolunteerIndex = state.volunteers.findIndex((volunteer) => volunteer._id === action.payload._id);
      const updatedVolunteer = [...state.volunteers];

      if (updatedVolunteerIndex !== -1) {
        updatedVolunteer[updatedVolunteerIndex] = action.payload;
      }

      return {
        ...state,
        volunteers: updatedVolunteer,
        loading: false,
        error: null,
      };

    case 'EDIT_VOLUNTEER_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error editing volunteer',
      };

    case 'DELETE_VOLUNTEER_SUCCESS':
      const updatedVolunteers = state.volunteers.filter((volunteer) => volunteer._id !== action.payload._id);
      return {
        ...state,
        volunteers: updatedVolunteers,
        loading: false,
        error: null,
      };

    case 'DELETE_VOLUNTEER_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error deleting volunteer',
      };

    default:
      return state;
  }
};

export default volunteersReducer;
