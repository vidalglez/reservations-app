const initializeTimes = {
  availableTimes: [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ],
}

const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_AVAILABLE_TIMES":
      console.log('---- SET_AVAILABLE_TIMES: ', action.payload)
      return {
        ...state,
        //availableTimes: action.payload,
      }
    default:
      return state
  }
}

export { initializeTimes, updateTimes }