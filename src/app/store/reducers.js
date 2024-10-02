const peopleArray = [
    "John",
    "Artemis",
    "Oliver",
    "Natalie",
    "Grace",
    "Luke",
    "David",
    "Theo",
    "Blake",
    "Paul",
  ];
  
  const initialState = {
    users: peopleArray,
    filterString: "",
  };
  
  export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FILTER":
        return {
          ...state,
          users: peopleArray.filter((user) =>
            user.toLowerCase().includes(action.payload.toLowerCase())
          ),
          filterString: action.payload,
        };
      default:
        return state;
    }
  };