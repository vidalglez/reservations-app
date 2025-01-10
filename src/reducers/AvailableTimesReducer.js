const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};

const submitAPI = function(formData) {
  return true;
};

const initializeTimes = {
  availableTimes: fetchAPI(new Date()),
  selectedDate: ''
}

const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_AVAILABLE_TIMES":
      return {
        ...state,
        availableTimes: fetchAPI(action.payload),
        selectedDate: action.payload,
      }
    default:
      return state
  }
}

export { initializeTimes, updateTimes, submitAPI }