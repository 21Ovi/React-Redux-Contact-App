const initialState = [
  {
    id: 0,
    name: "Mohammad Ovesh",
    number: 8511397395,
    email: "ovi@g.com",
  },
  {
    id: 2,
    name: "Kane Williamson",
    number: 8469559552,
    email: "kane@g.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;

    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;

    case "DELETE_CONTACT":
      const filteredContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filteredContacts;
      return state;

    default:
      return state;
  }
};

export default contactReducer;
